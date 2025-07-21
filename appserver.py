
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func  

app = Flask(__name__)
CORS(app)

app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:@localhost/ansd'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)


class Population(db.Model):
    __tablename__ = 'population_bis'
    id = db.Column(db.Integer, primary_key=True)
    indicateur = db.Column(db.String(50))
    region = db.Column(db.String(50))
    sexe = db.Column(db.String(50))
    unit = db.Column(db.String(50))
    annee = db.Column(db.Integer)
    pop_value = db.Column(db.Float)

    def to_dict(self):
        return {
            'id': self.id,
            'indicateur': self.indicateur,
            'region': self.region,
            'sexe': self.sexe,
            'unit': self.unit,
            'annee': self.annee,
            'pop_value': self.pop_value,
        }

class Couverture(db.Model):
    __tablename__ = 'couverture_bis_bis'
    id = db.Column(db.Integer, primary_key=True)
    region = db.Column(db.String(50))
    unit = db.Column(db.String(50))
    annee = db.Column(db.Integer)
    pop_value = db.Column(db.Float)
    nb_str = db.Column(db.Integer)
    couv_san = db.Column(db.Float)
    norm_oms = db.Column(db.Float)
    ajouter = db.Column(db.Float)
    pred = db.Column(db.Float)

    def to_dict(self):
        return {
            "annee": self.annee,
            "nb_str": self.nb_str,
            "couv_san": self.couv_san,
            "norm_oms": self.norm_oms,
            "ajouter": self.ajouter,
            "pred": self.pred,
        }


@app.route("/api/population")
def get_population():
    """Retourne les données de population par région ou globalement par année"""
    try:
        region_param = request.args.get("region", "").strip()

        if region_param:
            data = Population.query.filter(Population.region.ilike(region_param)).order_by(Population.annee).all()
            return jsonify([p.to_dict() for p in data])
        else:
            results = (
                db.session.query(Population.annee, func.sum(Population.pop_value).label("pop_value"))
                .group_by(Population.annee)
                .order_by(Population.annee)
                .all()
            )
            return jsonify([
                {"annee": int(row.annee), "pop_value": float(row.pop_value)}
                for row in results
            ])
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route("/api/regions")
def get_regions():
    """Retourne la liste des régions distinctes dans la table Population"""
    try:
        regions = (
            db.session.query(Population.region)
            .distinct()
            .order_by(Population.region)
            .all()
        )
        return jsonify([r.region for r in regions if r.region])
    except Exception as e:
        return jsonify({"error": str(e)}), 500


@app.route('/api/couverture')
def get_couverture():
    region = request.args.get('region', default='ALL')

    if region.upper() == 'ALL':
        results = (
            db.session.query(
                Couverture.annee,
                func.sum(Couverture.nb_str).label("nb_str"),
                func.avg(Couverture.couv_san).label("couv_san"),
                func.sum(Couverture.norm_oms).label("norm_oms"),  
            )
            .group_by(Couverture.annee)
            .order_by(Couverture.annee)
            .all()
        )

        data = []
        for r in results:
            if r.annee is None:
                continue 
            ajouter = float(r.norm_oms or 0) - float(r.nb_str or 0)
            data.append({
                "annee": int(r.annee),
                "nb_str": int(r.nb_str),
                "couv_san": round(float(r.couv_san), 2) if r.couv_san is not None else None,
                "norm_oms": round(float(r.norm_oms), 2) if r.norm_oms is not None else None,
                "ajouter": round(ajouter, 2),
                "pred": None  
            })
        return jsonify(data)

    else:
        results = (
            db.session.query(
                Couverture.annee,
                func.sum(Couverture.nb_str).label("nb_str"),
                func.avg(Couverture.couv_san).label("couv_san"),
                func.sum(Couverture.norm_oms).label("norm_oms"),
                func.sum(Couverture.ajouter).label("ajouter"),
                func.sum(Couverture.pred).label("pred")
            )
            .filter(Couverture.region == region)
            .group_by(Couverture.annee)
            .order_by(Couverture.annee)
            .all()
        )

        return jsonify([
            {
                "annee": int(r.annee),
                "nb_str": int(r.nb_str) if r.nb_str is not None else None,
                "couv_san": round(float(r.couv_san), 2) if r.couv_san is not None else None,
                "norm_oms": round(float(r.norm_oms), 2) if r.norm_oms is not None else None,
                "ajouter": round(float(r.ajouter), 2) if r.ajouter is not None else None,
                "pred": round(float(r.pred), 2) if r.pred is not None else None
            }
            for r in results
        ])

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)

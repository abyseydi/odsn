
import os
from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy import func  

app = Flask(__name__)
CORS(app)

# Configuration de la base de données via variables d'environnement
DB_HOST = os.environ.get('DB_HOST', 'localhost')
DB_PORT = os.environ.get('DB_PORT', '3306')
DB_USER = os.environ.get('DB_USER', 'root')
DB_PASSWORD = os.environ.get('DB_PASSWORD', 'Ha_mim500')
DB_NAME = os.environ.get('DB_NAME', 'ansddb')

# Construction de l'URI de connexion
DATABASE_URI = f'mysql+mysqlconnector://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}'

app.config['SQLALCHEMY_DATABASE_URI'] = DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Configuration pour la production
if os.environ.get('NODE_ENV') == 'production':
    app.config['DEBUG'] = False
    app.config['SQLALCHEMY_ENGINE_OPTIONS'] = {
        'pool_pre_ping': True,
        'pool_recycle': 300,
        'connect_args': {'connect_timeout': 60}
    }

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
            

            nb_str_val = int(r.nb_str or 0)
            couv_san_val = float(r.couv_san or 0)
            norm_oms_val = float(r.norm_oms or 0)
            ajouter_val = round(ajouter, 2)
            

            if (nb_str_val == 0 and couv_san_val == 0 and norm_oms_val == 0 and ajouter_val == 0) or int(r.annee) == 0:
                continue
                
            data.append({
                "annee": int(r.annee),
                "nb_str": nb_str_val,
                "couv_san": round(float(r.couv_san), 2) if r.couv_san is not None else None,
                "norm_oms": round(float(r.norm_oms), 2) if r.norm_oms is not None else None,
                "ajouter": ajouter_val,
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

        data = []
        for r in results:

            nb_str_val = int(r.nb_str or 0)
            couv_san_val = float(r.couv_san or 0)
            norm_oms_val = float(r.norm_oms or 0)
            ajouter_val = float(r.ajouter or 0)
            pred_val = float(r.pred or 0)
            

            if (nb_str_val == 0 and couv_san_val == 0 and norm_oms_val == 0 and ajouter_val == 0 and pred_val == 0) or int(r.annee) == 0:
                continue
                
            data.append({
                "annee": int(r.annee),
                "nb_str": nb_str_val if r.nb_str is not None else None,
                "couv_san": round(float(r.couv_san), 2) if r.couv_san is not None else None,
                "norm_oms": round(float(r.norm_oms), 2) if r.norm_oms is not None else None,
                "ajouter": round(ajouter_val, 2) if r.ajouter is not None else None,
                "pred": round(pred_val, 2) if r.pred is not None else None
            })
        return jsonify(data)


@app.route('/api/couverture/by_region')
def get_couverture_by_region():
    region = request.args.get('region', default='ALL')

    if region.upper() == 'ALL':
        results = (
            db.session.query(
                Couverture.region,
                func.sum(Couverture.nb_str).label("nb_str"),
                func.avg(Couverture.couv_san).label("couv_san"),
                func.sum(Couverture.norm_oms).label("norm_oms"),
            )
            .group_by(Couverture.region)
            .order_by(Couverture.region)
            .all()
        )

        data = []
        for r in results:


            #if r.region is None or
            if (
                r.region is None or
                str(r.region).strip().lower() == "region" or
                str(r.region).strip().upper() == "SENEGAL"
            ):
                continue
            ajouter = float(r.norm_oms or 0) - float(r.nb_str or 0)
            data.append({
                # "annee": int(r.annee),  # r.annee does not exist in this query, so remove or fix if needed
                "region": r.region,
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

@app.route('/health')
def health_check():
    """Health check endpoint pour OpenShift"""
    try:
        # Test de connexion à la base de données
        db.session.execute('SELECT 1')
        return jsonify({"status": "healthy", "database": "connected"}), 200
    except Exception as e:
        return jsonify({"status": "unhealthy", "error": str(e)}), 500

@app.route('/', methods=['GET'])
def root():
    """Endpoint racine"""
    return jsonify({"status": "healthy"}), 200

if __name__ == "__main__":
    port = int(os.environ.get('PORT', 8080))
    debug_mode = os.environ.get('NODE_ENV') != 'production'
    app.run(debug=debug_mode, host="0.0.0.0", port=port)

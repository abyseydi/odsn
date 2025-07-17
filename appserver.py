# from flask import Flask, jsonify, request
# from flask_cors import CORS
# from flask_sqlalchemy import SQLAlchemy

# app = Flask(__name__)
# CORS(app)

# # Configuration MySQL
# app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:@localhost/ansd'
# app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# db = SQLAlchemy(app)

# # Modèle Population
# class Population(db.Model):
#     __tablename__ = 'population'
#     id = db.Column(db.Integer, primary_key=True)
#     indicateur = db.Column(db.String(50))
#     region = db.Column(db.String(50))
#     sexe = db.Column(db.String(50))
#     unit = db.Column(db.String(50))
#     annee = db.Column(db.Integer)
#     pop_value = db.Column(db.Float)

#     def to_dict(self):
#         return {
#             'id': self.id,
#             'indicateur': self.indicateur,
#             'region': self.region,
#             'sexe': self.sexe,
#             'unit': self.unit,
#             'annee': self.annee,
#             'pop_value': self.pop_value,
#         }

# # 📊 Endpoint principal : données population ou total Sénégal
# @app.route("/api/population")
# def get_population():
#     try:
#         region_param = request.args.get("region")

#         if region_param:
#             query = Population.query.filter(Population.region.ilike(region_param.strip()))
#             data = query.order_by(Population.annee).all()
#             return jsonify([p.to_dict() for p in data])
#         else:
#             # Regrouper par année pour tout le Sénégal
#             results = (
#                 db.session.query(Population.annee, db.func.sum(Population.pop_value).label("pop_value"))
#                 .group_by(Population.annee)
#                 .order_by(Population.annee)
#                 .all()
#             )
#             return jsonify([
#                 {"annee": int(row.annee), "pop_value": float(row.pop_value)}
#                 for row in results
#             ])

#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# # 🌍 Endpoint pour récupérer toutes les régions distinctes
# @app.route("/api/regions")
# def get_regions():
#     try:
#         regions = (
#             db.session.query(Population.region)
#             .distinct()
#             .order_by(Population.region)
#             .all()
#         )
#         return jsonify([r.region for r in regions if r.region])
#     except Exception as e:
#         return jsonify({"error": str(e)}), 500

# # 🚀 Lancement
# if __name__ == "__main__":
#     app.run(debug=True, host="0.0.0.0", port=5000)

from flask import Flask, jsonify, request
from flask_cors import CORS
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
CORS(app)

# Configuration MySQL
app.config['SQLALCHEMY_DATABASE_URI'] = 'mysql+mysqlconnector://root:@localhost/ansd'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

db = SQLAlchemy(app)

# ============================
# 📊 Modèle Population
# ============================
class Population(db.Model):
    __tablename__ = 'population'
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

# ============================
# 🏥 Modèle Couverture
# ============================
class Couverture(db.Model):
    __tablename__ = 'couverture'
    id = db.Column(db.Integer, primary_key=True)
    region = db.Column(db.String(50))
    unit = db.Column(db.String(50))
    annee = db.Column(db.Integer)
    pop_value = db.Column(db.Float)
    nb_str = db.Column(db.Integer)
    couv_san = db.Column(db.Float)
    norm_oms = db.Column(db.Float)

    def to_dict(self):
        return {
            "annee": self.annee,
            "nb_str": self.nb_str,
            "couv_san": self.couv_san
        }

# ============================
# 📈 Endpoint Population
# ============================
@app.route("/api/population")
def get_population():
    try:
        region_param = request.args.get("region")

        if region_param:
            query = Population.query.filter(Population.region.ilike(region_param.strip()))
            data = query.order_by(Population.annee).all()
            return jsonify([p.to_dict() for p in data])
        else:
            results = (
                db.session.query(Population.annee, db.func.sum(Population.pop_value).label("pop_value"))
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

# ============================
# 🌍 Endpoint Régions
# ============================
@app.route("/api/regions")
def get_regions():
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

# ============================
# 🩺 Endpoint Couverture  // NB STR
# ============================
@app.route("/api/couverture")
def get_couverture():
    try:
        region_param = request.args.get("region")

        if region_param and region_param.upper() != "ALL":
            query = Couverture.query.filter(Couverture.region.ilike(region_param.strip()))
            data = query.order_by(Couverture.annee).all()
            return jsonify([d.to_dict() for d in data])
        else:
            # Agrégation nationale (Sénégal)
            results = (
                db.session.query(
                    Couverture.annee,
                    db.func.sum(Couverture.nb_str).label("nb_str"),
                    db.func.avg(Couverture.couv_san).label("couv_san")
                )
                .group_by(Couverture.annee)
                .order_by(Couverture.annee)
                .all()
            )
            return jsonify([
                {
                    "annee": int(r.annee),
                    "nb_str": int(r.nb_str),
                    "couv_san": round(float(r.couv_san), 2)
                }
                for r in results
            ])
    except Exception as e:
        return jsonify({"error": str(e)}), 500




# ============================
# 🚀 Lancement
# ============================
if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=5000)

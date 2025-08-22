# import os
# import mysql.connector
# from mysql.connector import Error

# # Récupération des variables d'environnement (ou valeurs par défaut)
# DB_HOST = os.environ.get('DB_HOST', 'localhost')
# DB_PORT = os.environ.get('DB_PORT', '3306')
# DB_USER = os.environ.get('DB_USER', 'root')
# DB_PASSWORD = os.environ.get('DB_PASSWORD', 'Ha_mim500')
# DB_NAME = os.environ.get('DB_NAME', 'ansddb')

# def test_db_connection():
#     try:
#         # Connexion à la base de données
#         connection = mysql.connector.connect(
#             host=DB_HOST,
#             port=DB_PORT,
#             user=DB_USER,
#             password=DB_PASSWORD,
#             database=DB_NAME
#         )

#         if connection.is_connected():
#             print("✅ Connexion réussie à la base de données.")
#             cursor = connection.cursor()
#             cursor.execute("SHOW TABLES;")
#             tables = cursor.fetchall()
#             print("📦 Tables dans la base de données :")
#             for table in tables:
#                 print(f" - {table[0]}")
#         else:
#             print("❌ Échec de la connexion à la base de données.")

#     except Error as e:
#         print(f"❌ Erreur de connexion : {e}")
#     finally:
#         if 'connection' in locals() and connection.is_connected():
#             connection.close()
#             print("🔒 Connexion fermée.")

# if __name__ == "__main__":
#     test_db_connection()

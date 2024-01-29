from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

profesores = [
    {
        "id": 1,
        "nombre": "Juan carlos bodoques",
        "cursos": [
            {
                "id": 1,
                "nombre": "Matematicas",
                "codigo": "PGY0000",
                "seccion": "013V",
                "alumnos": [
                    {"id": 1, "nombre": "exequiel"},
                    {"id": 2, "nombre": "amelia"}
                ]
            },
            {
                "id": 2,
                "nombre": "Fisica",
                "codigo": "PGY0000",
                "seccion": "015V",
                "alumnos": []
            },
            {
                "id": 3,
                "nombre": "Quimica",
                "codigo": "PGY0000",
                "seccion": "018V",
                "alumnos": []
            }
        ]
    }
]


usuarios = [
    {
        "id": 1,
        "user": "docente",
        "password": "password1",
        "nombre": "Diego Cares",
        "perfil":  1,
        "correo": "docente@gmail.com"
    },
    {
        "id": 2,
        "user": "alumno",
        "password": "password2",
        "nombre": "Exequiel Alvarado",
        "perfil": 2,
        "correo": "alumno@gmail.com"
    }
]


@app.route('/login', methods=['POST'])
def login():
    username = request.json.get('user')
    password = request.json.get('password')
    
    usuario = next((u for u in usuarios if u["user"] == username and u["password"] == password), None)
    
    if usuario:
        return jsonify({
            "id": usuario["id"],
            "nombre": usuario["nombre"],
            "user": usuario["user"],
            "correo": usuario["correo"],
            "tipoPerfil": usuario["perfil"]
        }), 200
    else:
        return jsonify({"message": "Credenciales incorrectas"}), 401


@app.route('/profesores', methods=['GET'])
def obtener_profesores():
    return jsonify(profesores), 200

@app.route('/profesores/<int:profesor_id>/cursos', methods=['GET'])
def obtener_cursos_profesor(profesor_id):
    profesor = next((p for p in profesores if p["id"] == profesor_id), None)
    if not profesor:
        return jsonify({"message": "Profesor no encontrado"}), 404
    return jsonify(profesor["cursos"]), 200

@app.route('/profesores/<int:profesor_id>/cursos/<int:curso_id>/alumnos', methods=['GET'])
def obtener_alumnos_curso(profesor_id, curso_id):
    profesor = next((p for p in profesores if p["id"] == profesor_id), None)
    if not profesor:
        return jsonify({"message": "Profesor no encontrado"}), 404
    curso = next((c for c in profesor["cursos"] if c["id"] == curso_id), None)
    if not curso:
        return jsonify({"message": "Curso no encontrado"}), 404
    return jsonify(curso["alumnos"]), 200

@app.route('/registrar_asistencia', methods=['POST'])

def registrar_asistencia():

  alumno_id = request.json.get('alumno_id')

  codigo = request.json.get('codigo')

  seccion = request.json.get('seccion')

  fecha = request.json.get('fecha')

   

  # Aquí buscarías el curso y al alumno y actualizarías su estado.

  for profesor in profesores:

    for curso in profesor["cursos"]:

      if curso["codigo"] == codigo and curso["seccion"] == seccion:

        for alumno in curso["alumnos"]:

          if alumno["id"] == alumno_id:

            alumno["status"] = 1 # 1 es para presente

            return jsonify({"message": "Asistencia registrada"}), 200

   

  return jsonify({"message": "No se pudo registrar la asistencia"}), 400

if __name__ == '__main__':
    app.run(debug=True)

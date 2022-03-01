from flask import Flask, jsonify, request, json
from flask_sqlalchemy import SQLAlchemy

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///Students.db'

db = SQLAlchemy(app)


class Students(db.Model):
	id = db.Column(db.Integer, primary_key=True)
	studentName = db.Column(db.Text, nullable=False)
	studentID = db.Column(db.Integer, nullable=False)
	studentPoints = db.Column(db.Integer, nullable=False)

	def __str__(self):
		return f'{self.id} {self.name} {self.studentID} {self.Points}'


def student_serializer(students):
	return {
		'id': students.id,
		'name': students.studentName,
		'studentID': students.studentID,
		'studentsPoints': students.studentPoints
	}


@app.route('/app',methods=["GET"])
def index():
	return jsonify([*map(student_serializer, Students.query.all())])

@app.route('/app/create', methods=["POST"])
def create():
	request_data = json.loads(request.data)
	student = Students(studentName=request_data['student']['name'],studentID=request_data['student']['id'],studentPoints=request_data['student']['points'])
	db.session.add(student)
	db.session.commit()
	return {'201':'Student Created!'}

@app.route('/app/<int:id>')
def student(id):
	return jsonify([*map(student_serializer, Students.query.filter_by(id=id))])

@app.route('/app/<int:id>', methods=["POST"])
def deleteStudent(id):
	request_data = json.loads(request.data)
	Students.query.filter_by(id=request_data['id']).delete()
	db.session.commit()

	return {'204':'DELETE Successfully'}

@app.route('/app/<int:id>/edit', methods=["POST"])
def editStudent(id):
	request_data = json.loads(request.data)
	student = Students.query.filter_by(id=request_data['student']['id']).first()
	student.studentName = request_data['student']['name']
	student.studentID = request_data['student']['studentID']
	student.studentPoints = request_data['student']['points']
	db.session.commit()

	return {'204':'DELETE Successfully'}
if __name__ == '__main__':
	app.run(debug=True)

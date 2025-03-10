from flask import Blueprint, request, jsonify
from models.tasks import Task
from database import db

tasks_bp = Blueprint('tasks', __name__)


@tasks_bp.route('/tasks', methods=['GET', 'POST'])
def tasks():
    if request.method == 'POST':
        data = request.json
        task = Task(
            Title=data.get('Title', ''),
            description=data.get('description', ''),
            due_date=data.get('due_date', ''),
            priority=data.get('priority', 'medium'),
            progress=data.get('progress', 'not started'),
            created_by=data.get('created_by', ''),
        )
        result = db.tasks.insert_one(task.to_dict())
        return jsonify({
            'status': 'Task created successfully',
            'task_id': str(result.inserted_id)
        })
    else:
        tasks_find = db.tasks.find()
        task_list = []

        for task in tasks_find:
            task_id = str(task['_id'])
            
            task = Task.from_dict(task)
            
            task_data = task.to_dict()
            task_data['_id'] = task_id

            task_list.append(task_data)

        return jsonify(task_list)    
            
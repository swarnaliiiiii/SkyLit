from flask import Blueprint, request, jsonify
from models.tasks import Task

tasks_bp = Blueprint('tasks', __name__)


@tasks_bp.route('tasks', methods=['GET', 'POST'])
def tasks():
    if request.method == 'POST':
        data = request.json
        task = Task(
            Title=data['Title'],
            description=data['description'],
            due_date=data['due_date'],
            priority=data['priority'],
            progress=data['progress'],
            created_by=data['created_by'],
            assigned_to=data['assigned_to'],
            created_at=data['created_at']
        )
        task.save()
        return jsonify(task.to_dict())
    else:
        task = Task.all()
        return jsonify([t.to_dict() for t in task])
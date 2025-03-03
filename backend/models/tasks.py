class tasks:
  def __init__(self, Title, description, due_date, priority, progress,task_id = None, created_by=None, created_at=None):
    self.task_id = task_id
    self.Title = Title
    self.description = description
    self.due_date = due_date
    self.priority = priority
    self.progress = progress
    self.created_by = created_by
    self.created_at = created_at

  def to_dict(self):
        return {
            'task_id': self.task_id,
            'Title': self.Title,
            'description': self.description,
            'due_date': self.due_date,
            'priority': self.priority,
            'progress': self.progress,
            'created_by': self.created_by,
            'created_at': self.created_at
        }
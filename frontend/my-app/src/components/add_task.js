import { useState } from 'react'
import './App.css'

function AddTask(){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [due_date, setDate] = useState('')
    const [priority, setPriority] = useState('')
    const [progress, setProgress] = useState('')
    const [created_by, setCreatedBy] = useState('')
    const [assigned_to, setAssignedTo] = useState('')

    const addTask = async () => {
        const response = await fetch('http://localhost:5000/tasks',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                title,
                description,
                due_date,
                priority,
                progress,
                created_by,
                assigned_to
            })
        })
        const data = await response.json()
        console.log(data)
    }

    return (
        <div className="fontfamily">

        </div>
    );
}
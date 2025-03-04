import { useState } from 'react'
import '../App.css'

function AddTask() {
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [due_date, setDate] = useState('')
    const [priority, setPriority] = useState('medium')
    const [progress, setProgress] = useState('not started')
    const [created_by, setCreatedBy] = useState('')
    
    const addTask = async () => {
        const response = await fetch('http://localhost:5000/tasks', {
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
            })
        })
        const data = await response.json()
        console.log(data)
        setTitle('')
        setDescription('')
        setDate('')
        setPriority('medium')
        setProgress('not started')
        setCreatedBy('')
    }
    
    return (
        <>
        <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl w-full bg-white rounded-lg shadow-xl p-8 border border-gray-200">
                <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">Add New Task</h2>
                
                <form onSubmit={(e) => {
                    e.preventDefault()
                    addTask()
                }} className="space-y-4">
                    {/* Title */}
                    <div>
                        <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                            Task Title
                        </label>
                        <input
                            type="text"
                            id="title"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter task title"
                        />
                    </div>
                    
                    {/* Description */}
                    <div>
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                            Description
                        </label>
                        <textarea
                            id="description"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            rows="3"
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            placeholder="Enter task description"
                        ></textarea>
                    </div>
                    
                    {/* Due Date */}
                    <div>
                        <label htmlFor="due_date" className="block text-sm font-medium text-gray-700 mb-1">
                            Due Date
                        </label>
                        <input
                            type="date"
                            id="due_date"
                            value={due_date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        />
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Priority */}
                        <div>
                            <label htmlFor="priority" className="block text-sm font-medium text-gray-700 mb-1">
                                Priority
                            </label>
                            <select
                                id="priority"
                                value={priority}
                                onChange={(e) => setPriority(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="low">Low</option>
                                <option value="medium">Medium</option>
                                <option value="high">High</option>
                                <option value="urgent">Urgent</option>
                            </select>
                        </div>
                        
                        {/* Progress */}
                        <div>
                            <label htmlFor="progress" className="block text-sm font-medium text-gray-700 mb-1">
                                Progress
                            </label>
                            <select
                                id="progress"
                                value={progress}
                                onChange={(e) => setProgress(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                            >
                                <option value="not started">Not Started</option>
                                <option value="in progress">In Progress</option>
                                <option value="review">Under Review</option>
                                <option value="completed">Completed</option>
                            </select>
                        </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Created By */}
                        <div>
                            <label htmlFor="created_by" className="block text-sm font-medium text-gray-700 mb-1">
                                Created By
                            </label>
                            <input
                                type="text"
                                id="created_by"
                                value={created_by}
                                onChange={(e) => setCreatedBy(e.target.value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Your name"
                            />
                        </div>
                    </div>
                    
                    {/* Submit Button */}
                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
                        >
                            Add Task
                        </button>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

export default AddTask;
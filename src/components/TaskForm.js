import { useState, useEffect} from "react"
import {useSelector, useDispatch} from 'react-redux' 
import { addTask, updateTask } from '../features/tasks/taskSlice'
import { useNavigate, useParams} from "react-router-dom"

import { v4 as uuid }  from 'uuid' 
function TaskForm () {
   
    
    const  [task, setTask] = useState({
        title: "",
        description: "",
    })
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const params = useParams()
    const tasks = useSelector(state => state.tasks)
    const handleChange = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value, 
        })
    }

    const handleSubmit = (e) =>{
        e.preventDefault()
        if (params.id) {
            dispatch(updateTask(task))
        } else {

        }
        dispatch(addTask({
            ...task,
            id: uuid(),
           
        }))
        navigate('/')

    } 
    useEffect(()=> {
            if (params.id) {
                setTask(tasks.find(task => task.id  === params.id))
        }
   
    }, [params.id, tasks ])
    return (
        <form onSubmit={handleSubmit}
        className="bg-zinc-800 max-w-sm p-4">
            <label htmlFor="title"
                className="block text-sm font-bold">Task:</label>
           <input 
            name="title" 
            type="text" 
            placeholder="title" 
            onChange={handleChange}
            value={task.title}
            className="w-full p-2 rounded-md bg-zinc-600 mb-2" />
            <label htmlFor="description"
                className="block text-sm font-bold"> Description</label>
           <textarea 
            name="description" 
            placeholder="description" 
            onChange={handleChange }
            value={task.description}
            className="w-full p-2 rounded-md bg-zinc-600 mb-2"></textarea> 
           <button className="bg-indigo-600 px-2 py-1">Save</button>
        </form>
    )
}


export default TaskForm;    
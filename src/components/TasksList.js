import { useSelector, useDispatch } from "react-redux"; 
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";
function TasksList () {

  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()
  const handleDelete = (id) => {
    dispatch(deleteTask(id))
  }
  console.log(tasks)
    return (
        <div>
          <header>
            <h1> Total Tasks: {tasks.length}</h1>
             <Link to={'/create-task'}>
             Create Task
             </Link>
          </header>
          {
            tasks.map((task) => (
              <div key={task.id}>
              <h1>{task.title}</h1>
              <p>{task.description}</p>
              <button onClick={() => handleDelete(task.id)}>Delete</button>
                  <Link to={`/edit-task/${task.id}`}>Edit</Link>
              </div>
            ))
          }
         
          </div>
    )
}

export default TasksList;
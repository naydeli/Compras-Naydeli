import { TaskRow } from "./TaskRow"

export const TaskTable = ({tasks, toggleTask, showCompleted = false }) => {

    const TaskTableRows = (doneValue) => {
        
        return (
            tasks
            .filter(task=> task.done === doneValue)
            .map(task => (
                <TaskRow task={task} key={task.name} toggleTask={toggleTask} />
               ))
        )
    }

    return (
        <table className='table table-dark table-striped table-bordered border-primary'>
        <thead>
          <tr className='table-defaul text-center '>
            <th>Compras</th>
          </tr>
        </thead>
        <tbody>
        {
          TaskTableRows(showCompleted)
        }
        
        </tbody>
      </table>
    )
 }
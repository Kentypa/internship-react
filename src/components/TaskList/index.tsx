import {TaskElement, Task} from "../TaskElement";

type TaskListProps = {
   tasks: Task[];
}

export const TaskList: React.FC<TaskListProps> = ({tasks}) => {
    return (
        <ul>
            {tasks.map((task) => (<TaskElement key={task.id} task={task}/>))}
        </ul>
    )
}
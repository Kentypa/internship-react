import {TaskProps} from "../TaskElement";

type TaskListProps = {
   tasks: TaskProps[];
}

export const TaskList: React.FC<TaskListProps> = (props: TaskListProps) => {
    return (
        <ul>
            {props.tasks.map((task) => (<li key={task.id}>{task.name}</li>))}
        </ul>
    )
}
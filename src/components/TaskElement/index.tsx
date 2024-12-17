export type Task = {
    id: number;
    name: string;
}

type TaskElementProps = {
    task: Task;
}

export const TaskElement: React.FC<TaskElementProps> = ({task : {name}}) => {
    return (
        <li>{name}</li>
    )
}
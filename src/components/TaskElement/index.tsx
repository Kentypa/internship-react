export type TaskProps = {
    id: string;
    name: string;
}

export const TaskElement: React.FC<TaskProps> = (props) => {
    return (
        <li key={props.id}>{props.name}</li>
    )
}
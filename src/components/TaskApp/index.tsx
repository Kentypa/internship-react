import {TaskList} from "../TaskList";
import {useState} from "react";
import {Button} from "../Button";
import {Task} from "../TaskElement";
import {Textarea} from "../Textarea";


export const TaskApp: React.FC = () => {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [taskName, setTaskName] = useState('');
    const [id, setId] = useState(0);

    return (
        <>
            <Textarea name={taskName} handleChange={((event: React.ChangeEvent<HTMLTextAreaElement>) => {
                setTaskName(event.target.value);
            })} />
            <Button handleClick={() => {
                setTasks([...tasks, {id: id, name: taskName}]);
                setId(id + 1);
            }}>
                Add Task
            </Button>
            <TaskList tasks={tasks} />
        </>
    )
}
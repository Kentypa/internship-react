import {TaskList} from "../TaskList";
import {useState} from "react";
import {Button} from "../Button";

export const TaskApp: React.FC<{}> = () => {
    const [tasks, setTasks] = useState([]);
    const [taskName, setTask] = useState('');
    const [id, setId] = useState(0);

    return (
        <>
            {<textarea value={taskName} onChange={(e) => setTask(e.target.value)}/>}
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
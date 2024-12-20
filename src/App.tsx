import './App.css'
import {Counter} from "./components/CounterApp";
import {ProductsApp} from "./components/ProductsApp";
import {useState} from "react";

function App() {
    const [isFirstTask, setTask] = useState(true);

    return (
        <>
            <div className="card">
                <input
                    type="checkbox"
                    checked={isFirstTask}
                    onChange={e => {
                        setTask(e.target.checked);
                    }}
                />
                <br/> is first task
            </div>
            {isFirstTask ? (<Counter />) : (<ProductsApp/>)}
        </>
    )
}

export default App

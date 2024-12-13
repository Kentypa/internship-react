import './App.css'
import {TextChanger} from "./components/TextChanger";
import {TaskApp} from "./components/TaskApp";
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
          {isFirstTask ? (<TextChanger/>) : (<TaskApp/>)}
      </>
    )
}

export default App

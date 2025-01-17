import './App.css';
import { Task3 } from "./task3/components/Task3";
import { BrowserRouter, NavLink, Route, Routes } from "react-router";
import { Task4Queries } from "./task4/components/Task4Queries";
import { Provider } from "react-redux";
import store from "./task5/store.ts";
import {Task5} from "./task5/components/Task5";

function App() {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <div className="main-layout">
                    <nav className="side-nav">
                        <NavLink to="/" className="nav-item">Home</NavLink>
                        <NavLink to="/task3/main-page" className="nav-item">Task3Pages</NavLink>
                        <NavLink to="/task4/page=1" className="nav-item">Task4Pages</NavLink>
                        <NavLink to="/task5" className="nav-item">Task5Pages</NavLink>
                    </nav>
                    <div className="content">
                        <Routes>
                            <Route path="/" element={<></>} />
                            <Route path="/task3/*" element={<Task3 />} />
                            <Route path="/task4/*" element={<Task4Queries />} />
                            <Route path="/task5" element={<Task5 />} />
                        </Routes>
                    </div>
                </div>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
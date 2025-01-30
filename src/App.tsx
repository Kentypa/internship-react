import "./App.css";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import store from "./task5/store.ts";
import { MenuRoutes } from "./screens/MenuRoutes.tsx";
import { Menu } from "./components/Menu";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Menu />
        <MenuRoutes />
      </BrowserRouter>
    </Provider>
  );
}

export default App;

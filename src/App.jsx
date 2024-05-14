import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { changeTheme } from "./utils/helper";

function App() {
  return (
    <>
      <div className="bg-primary">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <button onClick={() => changeTheme("")}>1</button>
      <button onClick={() => changeTheme("soch")}>2</button>
      <button onClick={() => changeTheme("grean")}>3</button>
      <button onClick={() => changeTheme("light-grean")}>4</button>
    </>
  );
}

export default App;

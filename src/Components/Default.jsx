import viteLogo from "../assets/vite.svg";
import reactLogo from "../assets/react.svg";
import {useState} from "react";
const Default=() => {
    const [count, setCount] = useState(0);
    return(
        <div>
              <h1>Vite + React</h1>
              <h1>Diplomado Full Stack</h1>
              <h2>Curso de React </h2>
              <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                  count is {count}
                </button>
                <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
                </p>
              </div>
              <p className="read-the-docs">
                Click on the Vite and React logos to learn more
              </p>
           
            </div>

    );
};
export default Default;
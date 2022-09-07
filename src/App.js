// import "./App.css";
import Hello from "./component/Hello";
import Welcome from "./component/Welcome";
import styles from "./App.module.css";
import VocaApp from "./VocaApp";

function App() {
    return (
        <div className="App">
            <Hello age={10} />
            {/* <Hello age={20} />
            <Hello age={30} /> */}
            <Welcome />
            <div className={styles.box}>App</div>
            {/* <VocaApp /> */}
        </div>
    );
}

export default App;

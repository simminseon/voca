import { useState } from "react";
import styles from "./Hello.module.css";

function Hello({ age }) {
    const [name, setName] = useState("Mike");
    const msg = age > 19 ? "성인 입니다." : "미성년자 입니다.";

    function showName() {
        console.log("Mike");
    }

    function showAge(age) {
        console.log(age);
    }

    function showText(txt) {
        console.log(txt);
    }

    return (
        <div>
            <h1 style={{ color: "red", borderRight: "1px solid #000", marginBottom: "30px", opacity: 0.5 }}>hello</h1>
            <div className={styles.box}>Hello</div>
            <div>이벤트</div>
            <button type="button" onClick={showName}>
                show name
            </button>
            <button type="button" onClick={() => showAge(10)}>
                show age
            </button>
            <br />
            <input
                onChange={(e) => {
                    const txt = e.target.value;
                    showText(txt);
                }}
            />
            <div>state, props</div>
            <h2>
                {name}({age}) : {msg}
            </h2>
            <button onClick={() => setName(name === "Mike" ? "Jane" : "Mike")}>이름 변경</button>
        </div>
    );
}

export default Hello;

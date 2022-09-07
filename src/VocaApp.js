import Header from "./component/Header";
import DayList from "./component/DayList";
import Day from "./component/Day";
import CreateWord from "./component/CreateWord";
import CreateDay from "./component/CreateDay";
import EmptyPage from "./component/EmptyPage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DeleteDay from "./component/DeleteDay";

function VocaApp() {
    return (
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<DayList />} />
                <Route path="/day/:day" element={<Day />} />
                <Route path="/createWord" element={<CreateWord />} />
                <Route path="/createDay" element={<CreateDay />} />
                <Route path="/deleteDay" element={<DeleteDay />} />
                <Route path="*" element={<EmptyPage />} />
                {/* <Route element={<EmptyPage />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default VocaApp;

import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
// import axios from "axios";
// import reactLogo from './assets/react.svg'
import Sidebar from "./component/Sidebar";
import "./App.css";
import MainView from "./component/MainView";
import EditTask from "./component/EditTask";

function App() {
  // const [fetchedData, setFetchedData] = useState([]);

  // useEffect(() => {
  //   const mintData = async () => {
  //     try {
  //       const { data } = await axios.get("/data.json");
  //       setFetchedData(data.boards);
  //     } catch (error) {
  //       console.error(error);
  //     }
  //   };
  //   mintData();
  // }, []);

  // console.log(fetchedData);

  return (
    <div>
      <div className="flex">
        <Sidebar />
        <Routes>
          <Route path="/:name" element={<MainView />} />
          {/* <Route path="dashboard/*" element={<MainView />} /> */}
          <Route path="/edit/:title" element={<EditTask />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

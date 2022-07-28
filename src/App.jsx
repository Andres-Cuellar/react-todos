import { useState } from "react";
import Form from "./components/Form";
import List from "./components/List";

function App() {
  const [tasksList, setTasksList] = useState([]);

  return (
    <div className="container col-12">
      <div className="row">
        <h1 className="mt-5 stiky-top"> Todo List</h1>
        <div className="col-12 sticky-sidebar shadow-sm m-2 p-4 overflow-auto">
          <Form tasksList={tasksList} setTasksList={setTasksList} />{" "}
        </div>
      </div>
      <div
        className="shadow-sm m-2 offset-3 p-4 overflow-auto h-100"
        id="main"
      >
        <List tasksList={tasksList} setTasksList={setTasksList} />
      </div>
    </div>
  );
}

export default App;

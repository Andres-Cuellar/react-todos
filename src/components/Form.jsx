import { useState } from "react";

const Form = ({ tasksList, setTasksList }) => {
  const [task, setTask] = useState("");

  const createID = () => {
    const random = Math.random().toString(36);
    const date = Date.now().toString(36);

    return date + random;
  };

  const objectTask = {
    id: createID(),
    task,
    done: false,
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (task == "") {
      console.log("Debe escribir una tarea");
      return;
    }
    setTasksList([...tasksList, objectTask]);
  };

  return (
    <div>
      <h2 className="mb-5">Agrega una nueva Tarea</h2>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">
              <img className="icon-task" src="task-sheet.png" alt="" />
            </span>
          </div>
          <input
            id="newTask"
            type="text"
            className="form-control"
            placeholder="Escribe una tarea"
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
        </div>
        <div className="d-grid gap-2">
          <button className="btn btn-success" type="submit">
            Agregar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;

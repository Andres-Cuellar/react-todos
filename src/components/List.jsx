const List = ({ tasksList, setTasksList }) => {
  const deleteTask = (id) => {
    const updatedTasks = tasksList.filter((task) => task.id !== id);
    setTasksList(updatedTasks);
  };

  return tasksList.map((individualTask) => {
    return (
      <>
        <div key={individualTask.id}></div>
        <h6>{individualTask.task}</h6>
        {individualTask.done ? (
          <p className="text-success">Completado</p>
        ) : (
          <p className="text-danger">No completado </p>
        )}
        <button className="btn btn-danger" onClick={() => deleteTask(individualTask.id)}>
          Eliminar tarea
        </button>
        <hr></hr>
      </>
    );
  });
};

export default List;

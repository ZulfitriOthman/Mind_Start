const AddTaskForm = ({ newTask, setNewTask, addTask, setNewDetail, newDetail, setNewDate, newDate }) => {
    return (
        <>
          {/* Add Task */}
          <div className="row">
            <br />
            <div className="col">

              {/* input text */}
              <input
                placeholder="Task Name"
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="form-control form-control-lg" />
            </div>

            <div className="col-auto">
              <button
                onClick={addTask}
                className="btn btn-lg btn-success">Add Task</button>
            </div>
          </div>
          <br />
        </>
    )
}
export default AddTaskForm;
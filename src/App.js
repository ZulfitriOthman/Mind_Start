import React, { useState } from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faPen,
  faTrashAlt,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";

function App() {
  const [toDo, setToDo] = useState([
    { id: 1, title: "Task 1", status: true },
    { id: 2, title: "Task 2", status: false },
  ]);

  //Temp State
  /////////////////////////////////////////
  const [newTask, setNewTask] = useState('');
  const [updateData, setUpdateData] = useState('');

  //Add task
  ////////////////////////////
  const addTask = () => {
    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('');
    }

    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('');
    }

    if (newTask) {
      let num = toDo.length + 1;
      let newEntry = { id: num, title: newTask, status: false }
      setToDo([...toDo, newEntry])
      setNewTask('');
    }
  };
  //Delete task
  ////////////////////////////////
  const deleteTask = (id) => {
    let newTask = toDo.filter(task => task.id !== id)
    setToDo(newTask);
  };

  //Mark task as done or completed
  //////////////////////////////////
  const markDone = (id) => {
    let newTask = toDo.map(task => {
      if (task.id === id) {
        return ({ ...task, status: !task.status })
      }
      return task;
    })
    setToDo(newTask);
  };

  //cancel update
  //////////////////////////////////
  const cancelUpdate = (id) => {
    //
  };

  //Change task for update
  /////////////////////////////////
  const changeTask = (id) => {
    //
  };

  //Update task
  //////////////////////////////////
  const updateTask = (id) => {
    //
  };

  return (
    <div className="contaier App">
      <br />
      <br />
      <h2>To Do List App</h2>
      <br />
      <br />

      {/* Update Task */}
      <div className="row">
        <div className="col">
          <input className="form-control form-control-lg" />
        </div>
        <div className="col-auto">
          <button className="btn btn-lg btn-success mr-20"> Update</button>
          <button className="btn btn-lg btn-warning">Cancel</button>
        </div>
      </div>
      <br />
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

          <input
            placeholder="Description"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
            className="form-control form-control-lg" />

          <input
            placeholder="Date"
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
      {/* display todos */}
      {toDo && toDo.length ? "" : "No Tasks..."}

      {toDo &&
        toDo
          .sort((a, b) => (a.id > b.id ? 1 : -1))
          .map((task, index) => {
            return (
              <React.Fragment key={task.id}>
                <div className="col taskBg">
                  <div className={task.status ? "done" : ""}>
                    <span className="taskNumber">{index + 1}</span>
                    <span className="taskText">{task.title}</span>
                  </div>
                  <div className="iconsWrap">
                    <span title="Completed / Not Completed"
                      onClick={(e) => markDone(task.id)}
                    >
                      <FontAwesomeIcon icon={faCircleCheck} />
                    </span>

                    {task.status ? null : (
                      <span title="Edit">
                        <FontAwesomeIcon icon={faPen} />
                      </span>
                    )}

                    <span title="Delete"
                      onClick={() => deleteTask(task.id)}
                    >
                      <FontAwesomeIcon icon={faTrashCan} />
                    </span>
                  </div>
                </div>
              </React.Fragment>
            );
          })}
    </div>
  );
}

export default App;

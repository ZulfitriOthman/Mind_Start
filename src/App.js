import { useState } from "react";
import "./App.css";
import AddTaskForm from "./components/AddTaskForm";
import ToDo from "./components/ToDo";
import UpdateForm from "./components/UpdateForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Calendar from 'react-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';

function App() {
  const [toDo, setToDo] = useState([
    { id: 1, title: "Task 1", status: true },
    { id: 2, title: "Task 2", status: false },
  ]);

  const [date, setDate] = useState(new Date());

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
  const cancelUpdate = () => {
    setUpdateData('');
  };

  //Change task for update
  /////////////////////////////////
  const changeTask = (e) => {
    let newEntry = {
      id: updateData.id,
      title: e.target.value,
      status: updateData.status ? true : false
    }
    setUpdateData(newEntry);
  };

  //Update task
  //////////////////////////////////
  const updateTask = () => {
    let filterRecords = [...toDo].filter(task => task.id !== updateData.id);
    let updatedObject = [...filterRecords, updateData]
    setToDo(updatedObject);
    setUpdateData(' ');
  };

  return (
    <div className="contaier App">
      <br />
      <br />
      <h2>To Do List App</h2>
      <br />
      <br />

      {/* Update Task */}
      {updateData && updateData ? (
        <UpdateForm
          updateData={updateData}
          changeTask={changeTask}
          updateTask={updateTask}
          cancelUpdate={cancelUpdate}
        />

      ) : (

        <AddTaskForm
          newTask={newTask}
          setNewTask={setNewTask}
          addTask={addTask}
        />

      )}

      {/* display todos */}
      {toDo && toDo.length ? "" : "No Tasks..."}
      <ToDo
        toDo={toDo}
        markDone={markDone}
        setUpdateData={setUpdateData}
        deleteTask={deleteTask}
      />

      {/* Calendar */}
      <div className='app text-center'>
        <h1 className='text-center'>React Calendar</h1>
        <div className='calendar-container text-center'>
          <Calendar className="text-center" onChange={setDate} value={date} selectRange={true} />
        </div>
        {date.length > 0 ? (
          <p className="text-center">
            <span className="text-center" >Start:</span> {' '} {date[0].toDateString()}
            &nbsp; to &nbsp;
            <span className="text-center">End:</span> {date[1].toDateString()}
          </p>
        ) : (
          <p className="text-center">
            <span>Default selected date:</span>{' '} {date.toDateString()}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;

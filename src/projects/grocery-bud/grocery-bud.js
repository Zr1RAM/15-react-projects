import React, { useEffect, useState } from "react";

import "./index.css";

import Alert from "./alert";
import List from "./list";

const getLocalStorage = () => {
  let list = localStorage.getItem("taskList");
  if (list) {
    return JSON.parse(localStorage.getItem("taskList"));
  } else {
    return [];
  }
};

const GroceryBud = () => {
  document.title = "Grocery bud";
  const [taskName, setTaskName] = useState("");
  const [taskList, setTaskList] = useState(getLocalStorage);
  const [isEditing, setIsEditing] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!taskName) {
      //display alert
      showAlert(true, "please enter value", "danger");
    } else if (taskName && isEditing) {
      // deal with edit
      setTaskList(
        taskList.map((item) => {
          if (item.id === editID) {
            return { ...item, title: taskName };
          }
          return item;
        })
      );
      setTaskName("");
      setEditID(null);
      setIsEditing(false);
      showAlert(true, "task name updated", "success");
    } else {
      // show alert and make new task
      const newItem = { id: new Date().getTime().toString(), title: taskName };
      setTaskList([...taskList, newItem]);
      setTaskName("");
      showAlert(true, "item added to list", "success");
    }
  };

  const showAlert = (show = false, msg = "", type = "") => {
    setAlert({ show, msg, type });
  };

  const clearList = () => {
    showAlert(true, "List cleared", "danger");
    setTaskList([]);
  };

  const removeItem = (id) => {
    showAlert(true, "item removed", "danger");
    setTaskList(taskList.filter((item) => item.id !== id));
  };

  const editItem = (id) => {
    const itemToEdit = taskList.find((item) => item.id === id);
    setIsEditing(true);
    setEditID(id);
    setTaskName(itemToEdit.title);
  };

  useEffect(() => {
    localStorage.setItem("taskList", JSON.stringify(taskList));
  }, [taskList]);

  return (
    <section className="section-center">
      <form className="grocery-form" onSubmit={handleSubmit}>
        {alert.show && (
          <Alert {...alert} removeAlert={showAlert} list={taskList} />
        )}
        <h3>To do List</h3>
        <div className="form-control">
          <input
            type="text"
            className="grocery"
            placeholder="e.g. eggs"
            value={taskName}
            onChange={(e) => setTaskName(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEditing ? "Edit" : "submit"}
          </button>
        </div>
      </form>
      {taskList.length > 0 && (
        <div className="grocery-container">
          <List list={taskList} removeItem={removeItem} editItem={editItem} />
          <button className="clear-btn" onClick={clearList}>
            clear items
          </button>
        </div>
      )}
    </section>
  );
};

export default GroceryBud;

import { useEffect, useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./utils/Header";
import Content from "./components/Content";

function App() {
  const [groupList, setGroupList] = useState(
    JSON.parse(localStorage.getItem("groupList")) || []
  );

  const [todoList, setTodoList] = useState(
    JSON.parse(localStorage.getItem("todoList")) || []
  );

  const [color, setColor] = useState(
    JSON.parse(localStorage.getItem("color")) || ""
  );

  const [newGroup, setNewGroup] = useState("");

  useEffect(() => {
    localStorage.setItem("todoList", JSON.stringify(todoList));
    localStorage.setItem("groupList", JSON.stringify(groupList));
    localStorage.setItem("color", JSON.stringify(color));
  }, [todoList][groupList]);

  const handleCheck = (taskId) => {
    const updatedTasks = todoList.map((task) =>
      task.id === taskId ? { ...task, checked: !task.checked } : task
    );
    setTodoList(updatedTasks);
  };

  const handleDeleteGroup = (groupId) => {
    const newGroupList = groupList.filter((group) => group.id !== groupId);
    setGroupList(newGroupList);
    const newTodoList = todoList.filter((task) => task.groupId !== groupId);
    setTodoList(newTodoList);
  };

  const handleDeleteTask = (taskId) => {
    const newTodoList = todoList.filter((task) => task.id !== taskId);
    setTodoList(newTodoList);
  };

  const addNewGroup = () => {
    const id = groupList.length ? groupList[groupList.length - 1].id + 1 : 1;
    const newGroupItem = { id, name: newGroup };
    const newGroupList = [...groupList, newGroupItem];
    setGroupList(newGroupList);
    setNewGroup("");
  };

  const addNewTask = (groupId, task) => {
    const id = todoList.length ? todoList[todoList.length - 1].id + 1 : 1;
    const newTodoItem = { id, groupId, checked: false, task };
    const newTodoList = [...todoList, newTodoItem];
    setTodoList(newTodoList);
    document.querySelectorAll(".new-task").forEach((item) => {
      item.value = "";
    });
  };

  return (
    <div id="main" style={{ backgroundColor: `${color}` }}>
      <Header setColor={setColor} />
      <Content
        groupList={groupList}
        todoList={todoList}
        handleCheck={handleCheck}
        handleDeleteGroup={handleDeleteGroup}
        handleDeleteTask={handleDeleteTask}
        addNewGroup={addNewGroup}
        addNewTask={addNewTask}
        newGroup={newGroup}
        setNewGroup={setNewGroup}
      />
    </div>
  );
}

export default App;

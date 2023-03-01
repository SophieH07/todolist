import { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

import Header from "./utils/Header";
import Content from "./components/Content";

function App() {
  const [groupList, setGroupList] = useState([
    {
      id: 1,
      name: "Work",
    },
    {
      id: 2,
      name: "Leisure",
    },
  ]);

  const [todoList, setTodoList] = useState([
    {
      id: 1,
      groupId: 1,
      checked: false,
      task: "Finnish first project",
    },
    {
      id: 2,
      groupId: 2,
      checked: false,
      task: "Drink coffee",
    },
    {
      id: 3,
      groupId: 2,
      checked: false,
      task: "Read a book",
    },
  ]);

  const handleCheck = (taskId) => {
    const updatedTasks = todoList.map((task) =>
      task.id === taskId ? { ...task, checked: !task.checked } : task
    );
    setTodoList(updatedTasks);
  };

  const handleChangeGroupName = (groupId, newName) => {
    const updatedGroups = groupList.map((group) =>
      group.id === groupId ? { ...group, name: newName } : group
    );
    setGroupList(updatedGroups);
  };

  const handleDeleteGroup = (groupId) => {
    const newGroupList = groupList.filter((group) => group.id !== groupId);
    setGroupList(newGroupList);
    const newTodoList = todoList.filter((task) => task.groupId !== groupId);
    setTodoList(newTodoList);
  };

  const handleAddNewGroup = (group) => {
    const id = groupList.length ? groupList[groupList.length - 1].id + 1 : 1;
    const newGroup = { id, name: group };
    const newGroupList = { ...groupList, newGroup };
    setGroupList(newGroupList);
  };

  const handleDeleteTask = (taskId) => {
    const newTodoList = todoList.filter((task) => task.id !== taskId);
    setTodoList(newTodoList);
  };

  const handleAddNewTask = (groupId, taskId) => {};

  return (
    <div>
      <Header />
      <Content
        groupList={groupList}
        todoList={todoList}
        handleCheck={handleCheck}
        handleChangeGroupName={handleChangeGroupName}
        handleDeleteGroup={handleDeleteGroup}
        handleDeleteTask={handleDeleteTask}
        handleAddNewGroup={handleAddNewGroup}
        handleAddNewTask={handleAddNewTask}
      />
    </div>
  );
}

export default App;

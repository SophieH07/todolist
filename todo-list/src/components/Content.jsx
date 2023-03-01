import GroupList from "./GroupList";
import "../App.css";
import AddGroup from "../modifications/AddGroup";

const Content = ({
  groupList,
  todoList,
  handleCheck,
  handleChangeGroupName,
  handleDeleteGroup,
  handleDeleteTask,
  addNewGroup,
  addNewTask,
  newGroup,
  setNewGroup,
}) => {
  return (
    <div className="content">
      {groupList.map((group) => (
        <GroupList
          key={group.id}
          group={group}
          todoList={todoList}
          handleCheck={handleCheck}
          handleChangeGroupName={handleChangeGroupName}
          handleDeleteGroup={handleDeleteGroup}
          handleDeleteTask={handleDeleteTask}
          addNewTask={addNewTask}
        />
      ))}
      <AddGroup
        addNewGroup={addNewGroup}
        newGroup={newGroup}
        setNewGroup={setNewGroup}
      />
    </div>
  );
};

export default Content;

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
  handleAddNewGroup,
  handleAddNewTask,
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
          handleAddNewTask={handleAddNewTask}
        />
      ))}
      <AddGroup handleAddNewGroup={handleAddNewGroup} />
    </div>
  );
};

export default Content;

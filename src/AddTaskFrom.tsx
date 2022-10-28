import React from "react";

interface AddTaskFormProps {
  value: React.ChangeEventHandler<HTMLInputElement>,
  task: React.MouseEventHandler
}

const AddTaskForm: React.FC<AddTaskFormProps> = props => {
  return (
    <form className="todo-block">
      <input
        type="text"
        placeholder="Add new task..."
        onChange={props.value}
      />
      <button
        className="todo-btn"
        type="submit"
        onClick={props.task}
      >Add</button>
    </form>
  )
};

export default AddTaskForm;
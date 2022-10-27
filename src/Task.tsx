import React from "react";

interface TaskProps {
  task: string,
  remove: React.MouseEventHandler
}

const Task: React.FC<TaskProps> = props => {
  return (
    <div className="task-block">
      <p>{props.task}</p>
      <button onClick={props.remove}>Del</button>
    </div>
  );
};

export default Task;
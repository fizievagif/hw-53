import React from "react";

interface TaskProps {
  task: string,
  remove: React.MouseEventHandler
}

const Task: React.FC<TaskProps> = props => {
  return (
    <div  className="task-block">
      <div>
        {props.task}
      </div>
      <div className="btn-del">
        <button onClick={props.remove} className="del">❌</button>
      </div>
    </div>
  );
};

export default Task;
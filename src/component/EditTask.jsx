import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { Input } from "postcss";

function EditTask() {
  const { title } = useParams();
  console.log(title);
  const navigate = useNavigate();
  const boards = useSelector((state) => state.boards);
  const [editTaskOpen, setEditTaskOpen] = useState(true);

  const displayedTask = boards.find((unit) =>
    unit.columns.find((unit1) =>
      unit1.tasks.find((unit2) => unit2.title === title)
    )
  );

  const { columns } = displayedTask;

  const innerTask = columns.find((unit) =>
    unit.tasks.find((unit2) => unit2.title === title)
  );

  const { tasks } = innerTask;

  const final = tasks.find((unit) => unit.title === title);
  console.log(final);

  return ReactDOM.createPortal(
    <div
      className="fixed top-0 bottom-0 left-0 right-0 bg-[black] opacity-90 z-[1000]"
      onClick={() => navigate(-1)}
    >
      <div className="py-6 px-4 fixed top-[30%] left-[30%] z-[1000] border-2 border-white rounded-lg w-[480px]">
        <div>
          <h2>{final.title}</h2>
          <img src="/assets/icon-vertical-ellipsis.svg" alt="three-dot.svg" />
        </div>
        <p>{final.description}</p>
        <div>
          <p>
            substasks {"("}
            {final.subtasks.filter((unit) => unit.isCompleted).length} of{" "}
            {final.subtasks.length}
            {")"}
          </p>
          <div>
            {final.subtasks.map((unit) => (
              unit.isCompleted ? (
                <div>
                  <input type="checkbox" checked id={`${unit.title}`}/>
                  <label htmlFor={`${unit.title}`}>{unit.title}</label>
                </div>
              ): (
                <div>
                <input type="checkbox" id={`${unit.title}`}/>
                <label htmlFor={`${unit.title}`}>{unit.title}</label>
              </div> 
              )
            ))}
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portals")
  );
}

export default EditTask;

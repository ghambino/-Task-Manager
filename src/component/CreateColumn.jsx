import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";

import { createColumn } from "../redux/actions/stateAction";

function CreateColumn({ isOpenColumn, setIsOpenColumn, identifier }) {
  const [columnName, setColumnName] = useState("");
  const dispatch = useDispatch();

  const handleCreatingColumn = (e) => {
    e.preventDefault();
    setIsOpenColumn(false);
    dispatch(createColumn(columnName, identifier));
    setColumnName("");
  };

  if (!isOpenColumn) return;

  return ReactDOM.createPortal(
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-[black] opacity-90 z-[1000] text-center">
      <div
        onSubmit={handleCreatingColumn}
        className="py-6 px-4 fixed top-[40%] left-[50%] z-[1000] border-2 border-white rounded-lg"
      >
        <div className="py-2">
          <label htmlFor="boardName">Column-Title: </label>
          <input
            type="text"
            id="columnName"
            required
            value={columnName}
            onChange={({ target }) => setColumnName(target.value)}
          />
        </div>

        <input type={"submit"} onClick={handleCreatingColumn} />
      </div>
    </div>,
    document.getElementById("portals")
  );
}

export default CreateColumn;

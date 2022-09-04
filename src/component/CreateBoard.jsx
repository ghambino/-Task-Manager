import React, { useState } from "react";
import ReactDOM from "react-dom";
import { useDispatch } from "react-redux";

import { createBoard } from "../redux/actions/stateAction";

function CreateBoard({ isOpen, setIsOpen }) {
  const [boardName, setBoardName] = useState("");
  const dispatch = useDispatch();

  const handleCreatingBoard = (e) => {
    e.preventDefault();
    setIsOpen(false);
    dispatch(createBoard(boardName));
    setBoardName("");
  };

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed top-0 bottom-0 left-0 right-0 bg-[black] opacity-90 z-[1000] text-center">
      <div
        onSubmit={handleCreatingBoard}
        className="py-6 px-4 fixed top-[40%] left-[50%] z-[1000] border-2 border-white rounded-lg"
      >
        <div className="py-2">
          <label htmlFor="boardName">Board Name: </label>
          <input
            type="text"
            id="boardName"
            required
            value={boardName}
            onChange={({ target }) => setBoardName(target.value)}
          />
        </div>

        <input
          type={"submit"}
          onClick={handleCreatingBoard}
        />
      </div>
    </div>,
    document.getElementById("portals")
  );
}

export default CreateBoard;

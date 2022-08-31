export const createBoard = (boardName) => {
  return {
    type: "CREATEBOARD",
    payload: boardName,
  };
};

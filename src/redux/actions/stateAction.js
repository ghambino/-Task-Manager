export const createBoard = (boardName) => {
  return {
    type: "CREATEBOARD",
    payload: boardName,
  };
};

export const createColumn = (columnName, identifier) => {
  return {
    type: "CREATECOLUMN",
    payload: {
      columnName,
      identifier,
    },
  };
};

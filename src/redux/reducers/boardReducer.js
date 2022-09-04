export const boardReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATEBOARD":
      {
        const boardName = action.payload;
        const existing = state.find((unit) => unit.name === boardName);
        if (existing)
          return window.alert(
            "board Name already existing, kindly create a new Name"
          );
        let newBoardObj = {
          name: boardName,
          columns: [],
        };
        return [...state, newBoardObj];
      }
      break;
    case "CREATECOLUMN": {
      const columnName = action.payload.columnName;
      const boardName = action.payload.identifier;
      //first find the board to be in existence
      let existing = state.find((unit) => unit.name === boardName);
      //create a new column
      const newColumnObj = {
        name: columnName,
        tasks: [],
      };
      //existing is an object with name and column prop
      existing = {...existing, columns: [...existing.columns, newColumnObj]}

      return state.map((unit) => (unit.name !== boardName ? unit : existing));
    }
    default:
      return state;
  }
};

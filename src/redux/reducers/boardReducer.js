export const boardReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATEBOARD": {
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
    default:
      return state;
  }
};

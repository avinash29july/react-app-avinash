export const editableContextReducerState = {
  rowData: [],
};

export const editableContextReducer = (editableState, editableAction) => {
  switch (editableAction.type) {
    case "SET_ROWS":
      return {
        ...editableState,
        rowData: editableAction.payload,
      };
    case "ADD_ROW":
      const updateRow = () => {
        const updatedData = [...editableState.rowData, editableAction.payload];
        return updatedData;
      };
      const newData = updateRow();
      return {
        ...editableState,
        rowData: newData,
      };
    default:
      return editableContextReducerState;
  }
};

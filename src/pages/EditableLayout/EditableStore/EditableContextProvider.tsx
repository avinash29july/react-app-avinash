import React, { useReducer } from "react";
import { AddModel, ContextModel } from "./ContextModel";
import EditableContext from "./editableContext";
import * as Reducer from "./editableReducer";

const EditableContextProvider = (props: { children: any }) => {
  const [ctxState, dispatchCtxEditable] = useReducer(
    Reducer.editableContextReducer,
    Reducer.editableContextReducerState
  );

  const addRowHandler = (rowData: AddModel) => {
    dispatchCtxEditable({ type: "ADD_ROW", payload: rowData });
  };

  const setRowDataHandler = (rows: AddModel[]) => {
    dispatchCtxEditable({ type: "SET_ROWS", payload: rows });
  }

  const editableContext: ContextModel = {
    rowData: ctxState.rowData,
    addRow: addRowHandler,
    setRowData: setRowDataHandler,
  };
  return (
    <>
      <EditableContext.Provider value={editableContext}>
        {props.children}
      </EditableContext.Provider>
    </>
  );
};

export default EditableContextProvider;

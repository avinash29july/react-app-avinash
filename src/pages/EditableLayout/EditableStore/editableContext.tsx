import React from "react";
import { ContextModel } from "./ContextModel";

const EditableContext: React.Context<ContextModel> = React.createContext<ContextModel>({
  rowData: [],
  setRowData: () => {},
  addRow: () => {},
});

export default EditableContext;

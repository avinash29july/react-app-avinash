import React from "react";
import AddView from "../AddView/AddView";
import TableView from "../TableView/TableView";
import EditableContextProvider from "./EditableStore/EditableContextProvider";

const EditableLayout = () => {
  return (
    <>
      <EditableContextProvider>
        <AddView />
        <TableView />
      </EditableContextProvider>
    </>
  );
};

export default EditableLayout;

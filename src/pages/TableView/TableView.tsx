import React, { useMemo, useEffect, useState, useContext } from "react";
import Card from "../../Component/UI/Card/Card";
import ReactTable from "../../Component/UI/ReactTable/ReactTable";
import EditableContext from "../EditableLayout/EditableStore/editableContext";
import { TableData } from "./../../constants/constant";

const TableView = () => {
  const ctx = useContext(EditableContext);
  const { rowData, setRowData } = ctx;
  const [skipPageReset, setSkipPageReset] = useState(false);

  const columns = useMemo(
    () => [
      {
        Header: "Editable Table",
        columns: [
          {
            Header: "First Name",
            accessor: "firstName",
          },
          {
            Header: "Last Name",
            accessor: "lastName",
          },
          {
            Header: "Age",
            accessor: "age",
          },
          {
            Header: "Email Address",
            accessor: "email",
          },
        ],
      },
    ],
    []
  );

  const updateMyData = (rowIndex, columnId, value) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true);
    let updatedData = rowData.map((row, index) => {
      if (index === rowIndex) {
        return {
          ...rowData[rowIndex],
          [columnId]: value,
        };
      } else {
        return row;
      }
    });
    setRowData(updatedData);
  };

  useEffect(() => {
    setRowData(TableData);
    setSkipPageReset(false);
  }, []);// eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Card>
      <div>
        <ReactTable
          columns={columns}
          data={rowData}
          updateMyData={updateMyData}
          skipPageReset={skipPageReset}
        />
      </div>
    </Card>
  );
};

export default TableView;

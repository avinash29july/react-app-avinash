class ContextModel {
  rowData: AddModel[];
  setRowData: (rows:AddModel[]) => void;
  addRow: (rowItem: AddModel) => void;
}

class AddModel {
  firstName: string;
  lastName: string;
  age: string;
  email: string;
}

export { ContextModel, AddModel };

export const HEADER = [
  { id: "id", isSortAvailable: false, name: "ID" },
  { id: "store", isSortAvailable: true, name: "Comercio" },
  { id: "cuit", isSortAvailable: true, name: "CUIT" },
  { id: "concept1", isSortAvailable: false, name: "Concepto 1" },
  { id: "concept2", isSortAvailable: false, name: "Concepto 2" },
  { id: "concept3", isSortAvailable: false, name: "Concepto 3" },
  { id: "concept4", isSortAvailable: false, name: "Concepto 4" },
  { id: "concept5", isSortAvailable: false, name: "Concepto 5" },
  { id: "concept6", isSortAvailable: false, name: "Concepto 6" },
  { id: "total", isSortAvailable: false, name: "Balance actual" },
  { id: "is_active", isSortAvailable: false, name: "Activo" },
  { id: "registered", isSortAvailable: false, name: "Ultima venta" },
];
export const OPTIONS = ["Todos", "Activado", "Desactivado"];
export const FILTERS = {
  ID: {
    id: "id",
    label: "ID",
  },
  CUIT: {
    id: "cuit",
    label: "CUIT",
  },
  NAME: {
    id: "name",
    label: "NOMBRE",
  },
};

export const TEXT_TRANSLATION = {
  es: {
    button: "Filtrar",
    dataTable: {
      noData: 'No hay datos para mostrar',
      rowsPerPage: 'Filas por pagina:'
    }
  },
};

export const INITIAL_SEARCH_STATE = {
  status: "Todos",
  id: "",
  cuit: "",
  name: "",
  page: 1,
};
export const INITIAL_SELECT_STATE = "Todos";
export const PAGE_RANGE_DISPLAYED = 10;
export const PAGINATION = {
  defaultPage : 1,
  rowsPerPage: 0,
  total: 0
}

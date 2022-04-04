import React from "react";
import { render, screen } from "@testing-library/react";
import DataTable from ".";
const HEADERS = [{ id: "id", isSortAvailable: false, name: "ID" }];
const ROWS = [];
describe("DataTable Test suites", () => {
  test("show no data if nothing is passed trought props", () => {
    const HEADERS = [];
    const ROWS = [];
    render(<DataTable headerTitle={HEADERS} cellsData={ROWS} />);
    expect(screen.getByText(/No hay datos para mostrar/)).toBeInTheDocument();
  });
});

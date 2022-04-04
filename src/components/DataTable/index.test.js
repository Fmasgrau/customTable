import React from "react";
import { render, screen } from "@testing-library/react";
import DataTable from ".";
import { TEXT_TRANSLATION } from "../../pages/Home/constants";

describe("DataTable Test suites", () => {
  test("Should render no data when headers or rows are empty", () => {
    const textToShow = TEXT_TRANSLATION.es.dataTable.noData;
    const HEADERS = [];
    const ROWS = [];
    render(<DataTable headerTitle={HEADERS} cellsData={ROWS} />);
    expect(screen.getByText(textToShow)).toBeInTheDocument();
  });

  test("Should render 1 item", () => {
    const HEADERS = [{ id: "id", isSortAvailable: false, name: "ID" }];
    const ROWS = [{ id: "test" }];
    render(<DataTable headerTitle={HEADERS} cellsData={ROWS} />);
    expect(screen.getByText(ROWS[0].id)).toBeInTheDocument();
  });

  test("should render more than one item", () => {
    const HEADERS = [{ id: "id", isSortAvailable: false, name: "ID" }];
    const ROWS = [{ id: "test" }, { id: "test2" }, { id: "test3" }];
    render(<DataTable headerTitle={HEADERS} cellsData={ROWS} />);
    expect(screen.getAllByText(/test/)).toHaveLength(3);
  });
});

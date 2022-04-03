import React, { useState } from "react";
import styles from "./styles.module.scss";
import Pagination from "react-js-pagination";

interface IHeaderTitleProps {
  id: string;
  isSortAvailable: boolean;
  name: string;
}

interface DataTableProps {
  headerTitle?: IHeaderTitleProps[];
  cellsData?: any[];
  handleSort: (id: string) => void;
  activePage: number,
  setActivePage: (number: number) => void,
  itemsCountPerPage: number,
  totalItemsCount: number,
  pageRangeDisplayed: number
}

export default function DataTable({
  headerTitle,
  cellsData,
  handleSort,
  activePage,
  setActivePage,
  itemsCountPerPage,
  totalItemsCount,
  pageRangeDisplayed
}: DataTableProps) {
  const handleSortById = (event: any) => {
    handleSort(event.target.id);
  };
  const headerRow = headerTitle?.map((header) => (
    <th
      onClick={header.isSortAvailable ? handleSortById : () => {}}
      key={header.id}
      id={header.id}
      className={
        header.isSortAvailable
          ? styles.handleSort
          : styles.handleSortNotAvailable
      }
    >
      {header.name}
    </th>
  ));
  const cellsRows = cellsData?.map((cells) => (
    <tr key={cells.id}>
      {Object.keys(cells).map((key) => (
        <td key={cells[key]}>
          {typeof cells[key] === "boolean" ? cells[key].toString() : cells[key]}
        </td>
      ))}
    </tr>
  ));
  return (
    <div className="container-fluid px-4">
      <div className="row">
        <table className="table table-bordered px-1">
          <thead>
            <tr>{headerRow}</tr>
          </thead>
          <tbody>{cellsRows}</tbody>
        </table>
      </div>
      <div className="row justify-content-center">
        <Pagination
          activePage={activePage}
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={totalItemsCount}
          pageRangeDisplayed={pageRangeDisplayed}
          onChange={setActivePage}
          itemClass="page-item"
          linkClass="page-link"
          innerClass="d-flex pl-0 list-unstyled justify-content-center"
        />
        <span>Filas por pagina: {itemsCountPerPage}</span>
      </div>
    </div>
  );
}

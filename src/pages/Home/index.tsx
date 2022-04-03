import React, { useEffect, useState } from "react";
import CustomSelect from "../../components/CustomSelect";
import DataTable from "../../components/DataTable";
import Filter from "../../components/Filter";
import DummyData from "../../mocks/dummy-data/stores.json";
import { StoresService } from "../../services/stores/service";
import { sortBy } from "../../utils/sort";
import {
  FILTERS,
  HEADER,
  INITIAL_SEARCH_STATE,
  INITIAL_SELECT_STATE,
  OPTIONS,
  TEXT_TRANSLATION,
} from "./constants";

interface ISearchTextProps {
  [x: string]: any;
  id?: string;
  cuit?: string;
  name?: string;
}

export default function Home() {
  const [searchText, setSearchText] =
    useState<ISearchTextProps>(INITIAL_SEARCH_STATE);
  const [data, setData] = useState<ISearchTextProps[]>([]);
  const [optionSelected, setOptionSelected] = useState(INITIAL_SELECT_STATE);
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    StoresService.getStores().then((res) =>
    setData(res.data.data)
    );
  }, [])

  const handleID = (event: any) => {
    const value = event.target.value;
    setSearchText({ ...searchText, id: value, page: "" });
  };
  const handleCuit = (event: any) => {
    const value = event.target.value;
    setSearchText({ ...searchText, cuit: value, page: "" });
  };
  const handleName = (event: any) => {
    const value = event.target.value;
    setSearchText({ ...searchText, name: value, page: "" });
  };

  const handleSelect = (value: string) => {
    setSearchText({ ...searchText, status: value, page: "" });
    setOptionSelected(value);
  };

  const handlePage = (value: number) => {
    setActivePage(value);
    setSearchText({ ...searchText, page: value });
    StoresService.getStoresBy({ ...searchParams, page: value }).then((res) =>
      res // TODO create a mockup for this
    );
  };

  const searchParams = Object.keys(searchText).reduce(
    (prevValue, currentValue): ISearchTextProps => {
      if (searchText[currentValue]) {
        return { ...prevValue, [currentValue]: searchText[currentValue] };
      }
      return { ...prevValue };
    },
    {}
  );

  interface Prueba {
    [key: string | number]: string | number;
  }

  const handleClick = () => {
    StoresService.getStoresBy(searchParams).then((res) => res);
  };

  const handleSort = (id: string) => {
    id = id.toLocaleLowerCase();
    const newOrder = data.sort((a: Prueba, b: Prueba) => sortBy(a[id], b[id]));
    setData([...newOrder]);
  };

  return (
    <div className="container-fluid">
      <div className="row justify-content-between mb-4 mt-2">
        <div className="col-2 d-flex align-items-center gap-3">
          <Filter
            onChange={handleID}
            label={FILTERS.ID.label}
            id={FILTERS.ID.id}
          />
        </div>
        <div className="col-3 d-flex align-items-center gap-3">
          <Filter
            onChange={handleCuit}
            label={FILTERS.CUIT.label}
            id={FILTERS.CUIT.id}
          />
        </div>
        <div className="col-3 d-flex align-items-center gap-3">
          <Filter
            onChange={handleName}
            label={FILTERS.NAME.label}
            id={FILTERS.NAME.id}
          />
        </div>
        <div className="col-2 d-flex align-items-center gap-3">
          <CustomSelect
            value={optionSelected}
            onChange={handleSelect}
            options={OPTIONS}
          />
        </div>
        <div className="col-2 d-flex align-items-center gap-3">
          <button onClick={handleClick} className="btn btn-md bg-success w-100">
            <span className="text-white"> {TEXT_TRANSLATION.es.button}</span>
          </button>
        </div>
      </div>
      <div className="row">
        <DataTable
          headerTitle={HEADER}
          cellsData={data}
          handleSort={handleSort}
          activePage={activePage}
          setActivePage={handlePage}
          itemsCountPerPage={DummyData.rowsPerPage}
          totalItemsCount={DummyData.total}
          pageRangeDisplayed={10}
        />
      </div>
    </div>
  );
}

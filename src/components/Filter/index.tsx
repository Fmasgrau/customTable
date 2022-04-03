import React from "react";

interface IFilterProps {
  onChange?: (event: any) => void;
  id?: string;
  label?: string;
}

export default function Filter({ onChange, id, label }: IFilterProps) {
  return (
   <>
      <label htmlFor={id} className="mr-2">{label}</label>
      <input type="text" className="form-control ml-1" onChange={onChange} id={id}></input>
   </>
  );
}

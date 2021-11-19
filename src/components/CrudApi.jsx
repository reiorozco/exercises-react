import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

export default function CrudApi() {
  const [database, setDatabase] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);

  let api = helpHttp();
  let url = "http://localhost:5000/mockData";

  useEffect(() => {
    api.get(url).then((res) => {
      // console.log(res);
      if (!res.err) {
        setDatabase(res);
      } else {
        setDatabase(null);
      }
    });
  }, []);

  const createData = (data) => {
    // console.log(data);
    // data.id = Date.now();
    data.id = database.length + 1;
    setDatabase([...database, data]);
  };

  const updateData = (data) => {
    let newData = database.map((el) => (el.id === data.id ? data : el));
    setDatabase(newData);
  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Estas seguro de eliminar el registro con el id "${id}"`
    );

    if (isDelete) {
      let newData = database.filter((el) => el.id !== id);
      setDatabase(newData);
    } else {
      return;
    }
  };

  return (
    <div>
      <h2>CRUD API</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={database}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
}

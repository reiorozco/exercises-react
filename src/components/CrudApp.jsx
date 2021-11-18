import React, { useState } from "react";
import initialDatabase from "../helpers/MOCK_DATA.json";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

export default function CrudApp() {
  const [database, setDatabase] = useState(initialDatabase);
  const [dataToEdit, setDataToEdit] = useState(null);

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
      <h2>CRUD App</h2>
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

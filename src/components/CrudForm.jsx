import React, { useState, useEffect } from "react";

const initialForm = {
  id: null,
  firstName: "",
  lastName: "",
  email: "",
};

export default function CrudForm({
  createData,
  updateData,
  dataToEdit,
  setDataToEdit,
}) {
  const [form, setForm] = useState(initialForm);

  useEffect(() => {
    if (dataToEdit) {
      setForm(dataToEdit);
    } else {
      setForm(initialForm);
    }
    // return () => {
    //   cleanup;
    // };
  }, [dataToEdit]);

  const handleChange = (event) => {
    setForm({
      ...form,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!form.firstName || !form.lastName || !form.email) {
      alert("Datos incompletos");
      return;
    }

    if (form.id === null) {
      createData(form);
    } else {
      updateData(form);
    }

    handleReset();
  };

  const handleReset = (event) => {
    setForm(initialForm);
    setDataToEdit(null);
  };

  return (
    <div>
      <h3>
        {dataToEdit ? (
          <>
            <del>Add</del> Edit
          </>
        ) : (
          "Add"
        )}
      </h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="Name"
          onChange={handleChange}
          value={form.firstName}
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last name"
          onChange={handleChange}
          value={form.lastName}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          value={form.email}
        />
        <input type="submit" value="Submit" />
        <input type="reset" value="Reset" onClick={handleReset} />
      </form>
    </div>
  );
}

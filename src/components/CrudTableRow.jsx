import React from "react";

export default function CrudTableRow({ element, setDataToEdit, deleteData }) {
  let { id, firstName, lastName, email } = element;

  return (
    <tr>
      <td>{firstName}</td>
      <td>{lastName}</td>
      <td>{email}</td>
      <td>
        <button
          onClick={() => {
            console.log(element);
            return setDataToEdit(element);
          }}
        >
          Edit
        </button>
        <button onClick={() => deleteData(id)}>Delete</button>
      </td>
    </tr>
  );
}

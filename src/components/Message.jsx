import React from "react";

export default function Message({ message, bgColor }) {
  let styles = {
    padding: "1rem",
    marginBottom: "1rem",
    textAlign: "center",
    color: "#fff",
    fontWeight: "bold",
    backgroundColor: bgColor,
    borderRadius: "1rem",
  };

  return (
    <div style={styles}>
      <p>{message}</p>
    </div>
  );
}

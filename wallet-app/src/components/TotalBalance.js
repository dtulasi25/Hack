


import React from "react";

function totalBalance({ total }) {
  return (
    <div style={{
      background: "#4CAF50",
      color: "white",
      padding: "20px",
      marginBottom: "20px",
      borderRadius: "10px"
    }}>
      <h2>Total Balance</h2>
      <h1>₹{total}</h1>
    </div>
  );
}

export default totalBalance;
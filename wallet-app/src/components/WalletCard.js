 

import React from "react";

function WalletCard({ name, balance }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "20px",
      margin: "10px",
      borderRadius: "10px",
      width: "200px",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
    }}>
      <h3>{name}</h3>
      <p>Balance: ₹{balance}</p>
    </div>
  );
}

export default WalletCard; 
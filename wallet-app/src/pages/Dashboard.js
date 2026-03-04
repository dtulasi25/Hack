

import React from "react";
import WalletCard from "../components/WalletCard";
import TotalBalance from "../components/TotalBalance";
import AddExpenseButton from "../components/AddExpenseButton";

function Dashboard() {

  const wallets = [
    { name: "Shopping", balance: 5000 }, 
    { name: "Rent", balance: 4000 },
    { name: "Emergency", balance: 2000 },
    { name: "Travel", balance: 1500 }
  ];

  const total = wallets.reduce((sum, wallet) => sum + wallet.balance, 0);

  return (
    <div style={{ padding: "20px" }}>

      <TotalBalance total={total} />

      <div style={{ display: "flex" }}>
        {wallets.map((wallet, index) => (
          <WalletCard
            key={index}
            name={wallet.name}
            balance={wallet.balance}
          />
        ))}
      </div>

      <AddExpenseButton />

    </div>
  );
}

export default Dashboard;
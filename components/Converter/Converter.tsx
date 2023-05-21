import React from "react";
import styles from "./Converter.module.scss";
import type { TCurrency } from "../../types";

type TCurrencyIndex = {
  [key in TCurrency]: number;
};

const currencyIndex: TCurrencyIndex = {
  usd: 1,
  eur: 1.2,
  gbp: 2,
  aud: 0.85,
  cad: 1.3,
};

const Converter: React.FC<{ currency: TCurrency }> = ({ currency }) => {
  const [amount, setAmount] = React.useState(0);
  const [price, setPrice] = React.useState("");

  const productCost = 10;

  React.useEffect(() => {
    const price = amount * currencyIndex[`${currency}`] * productCost;
    setPrice(`${currency.toUpperCase()}: ${price.toFixed(2)}`);
  }, [amount, currency]);

  return (
    <div className={styles.converter}>
      <div className={styles.container}>
        <div>
          <label htmlFor="amount">Amount: </label>
          <input
            id="amount"
            value={amount || ""}
            onChange={(e) => setAmount(Number(e.target.value) || 0)}
          />
        </div>
        <div>
          <label htmlFor="price">Price: </label>
          <input id="price" value={price} disabled />
        </div>
      </div>
    </div>
  );
};

export default Converter;

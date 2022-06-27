import React from "react";
import { Link } from "react-router-dom";
import Coin from "../routes/Coin";
import CoinItem from "./CoinItem";

const Coins = (props) => {
  return (
    <div className="container">
      <div>
        <div className="heading">
          <p className="coin-name">#</p>
          <p>Coin</p>
          <p>Price</p>
          <p>24h</p>
          <p className="hide-mobile">Volume</p>
          <p className="hide-mobile">Market</p>
        </div>
      </div>
      {props.coins.map((coins) => {
        return (
          <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
            <CoinItem coins={coins} />
          </Link>
        );
      })}
    </div>
  );
};

export default Coins;

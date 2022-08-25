import React from "react"
import CoinItem from "./CoinItem"
import Coin from "../routes/Coin"
import { Link } from "react-router-dom"

import "./Coins.css"

const Coins = (props) => {
  return (
    <div className="container">
      <div>
        <div className="heading">
          <div>#</div>
          <div className="coin-name">Coin</div>
          <div>Price</div>
          <div>24h</div>
          <div className="hide-mobile">Volume</div>
          <div className="hide-mobile">Mkt Cap</div>
        </div>

        {props.coins.map((coins) => {
          return (
            <Link to={`/coin/${coins.id}`} element={<Coin />} key={coins.id}>
              <CoinItem coins={coins} />
            </Link>
          )
        })}
      </div>
    </div>
  )
}

export default Coins

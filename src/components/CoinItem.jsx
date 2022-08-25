import React from "react"

import "./Coins.css"

const CoinItem = (props) => {
  return (
    <div className="coin-row">
      <div>{props.coins.market_cap_rank}</div>
      <div className="img-symbol">
        <img src={props.coins.image} alt="" />
        <p>{props.coins.symbol.toUpperCase()}</p>
      </div>
      <div>${props.coins.current_price.toLocaleString()}</div>
      <div>{props.coins.price_change_percentage_24h.toFixed(2)}%</div>
      <div className="hide-mobile">
        ${props.coins.total_volume.toLocaleString()}
      </div>
      <div className="hide-mobile">
        ${props.coins.market_cap.toLocaleString()}
      </div>
    </div>
  )
}

export default CoinItem

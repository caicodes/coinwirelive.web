import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Coin = () => {
  const params = useParams();
  const [coin, setCoin] = useState({});

  const url = `https://api.coingecko.com/api/v3/coins/${params.coinId}`;

  useEffect(() => {
    axios
      .get(url)
      .then((result) => {
        setCoin(result.data);
        console.log(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <div>Coin : {coin.id}</div>
      <div>Name : {coin.name}</div>
      <div>Rank : {coin.market_cap_rank}</div>
      <div>Symbol : {coin.symbol}</div>
      <div>
        Image thumb :{" "}
        {coin.image ? <img src={coin.image.thumb} alt="" /> : null}
      </div>
      <div>
        Image small :{" "}
        {coin.image ? <img src={coin.image.small} alt="" /> : null}
      </div>
      <div>
        Image large :{" "}
        {coin.image ? <img src={coin.image.large} alt="" /> : null}
      </div>
      <div>
        Description (en) :{" "}
        {coin.description ? <div dangerouslySetInnerHTML={{ __html: coin.description.en }} /> : null}
      </div>
    </>
  );
};

export default Coin;

import axios from "axios"
import { Route, Routes } from "react-router-dom"
import React, { useEffect, useState } from "react"
import Coins from "./components/Coins"
import Navbar from "./components/Navbar"
import { Circles } from "./components/d3/Elements"
import Coin from "./routes/Coin"

function App() {
  const [coins, setCoins] = useState([])

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Coins coins={coins} />} />
        <Route path="/coin" element={<Coin />}>
          <Route path=":coinId" element={<Coin />} />
        </Route>
      </Routes>

      <Circles />
    </>
  )
}

export default App

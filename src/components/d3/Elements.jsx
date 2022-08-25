import React, { useState, useRef, useEffect } from "react"
import * as d3 from "d3"

export const SVG = () => {
  const ref = useRef()

  useEffect(() => {
    const svgElement = d3.select(ref.current)
    svgElement.append("circle").attr("cx", 150).attr("cy", 70).attr("r", 50)
  }, [])

  return <svg ref={ref} />
}

export const Circle = () => {
  return (
    <svg>
      <circle cx="150" cy="77" r="40" />
    </svg>
  )
}

const generateDataset = () =>
  Array(13)
    .fill(0)
    .map(() => [Math.random() * 80 + 10, Math.random() * 35 + 10])

function useInterval(callback, delay) {
  const savedCallback = useRef()

  // Remember the latest callback.
  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      let id = setInterval(tick, delay)
      return () => clearInterval(id)
    }
  }, [delay])
}

export const Circles = () => {
  const [dataset, setDataset] = useState(generateDataset())
  const ref = useRef()
  useEffect(() => {
    const svgElement = d3.select(ref.current)
    svgElement
      .selectAll("circle")
      .data(dataset)
      .join("circle")
      .transition()
      .duration(3000)
      .attr("cx", (d) => d[0])
      .attr("cy", (d) => d[1])
      .attr("r", 5)
      .attr("fill", "var(--circles-fill")
  }, [dataset])

  useInterval(() => {
    const newDataset = generateDataset()
    setDataset(newDataset)
  }, 3000)
  return <svg id="d3SVG" viewBox="0 0 100 50" ref={ref} />
}

// d3.selectAll("circle")
// .transition()
// .duration(750)
// .delay(function (d, i) {
//   return i * 10
// })
// .attr("r", function (d) {
//   return Math.sqrt(d * 20)
// })

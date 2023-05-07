import React from "react"
import "./Portfolio.css"
import ItemPortfolio from "../ItemPortfolio/ItemPortfolio"
import portfolio from "./Portfolio.json"

const Portfolio = () => {
  return (
    <main>
      {portfolio.map((item, index) => (
        <ItemPortfolio
          key={index}
          link={item.link}
          image={item.image + (index + 1)}
          title={item.title}
        ></ItemPortfolio>
      ))}
    </main>
  )
}

export default Portfolio

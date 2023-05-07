import React from "react"
import "./Portfolio.css"
import ItemPortfolio from "../ItemPortfolio/ItemPortfolio"

const Portfolio = () => {
  const portfolios = [
    {
      link: "https://academy.comeialabs.com.br/",
      image: "https://picsum.photos/200/300?random=1",
      title: "Card Interativo",
    },

    {
      link: "https://academy.comeialabs.com.br/",
      image: "https://picsum.photos/200/300?random=2",
      title: "LandingPage",
    },

    {
      link: "https://academy.comeialabs.com.br/",
      image: "https://picsum.photos/200/300?random=3",
      title: "Quadroa4",
    },
  ]

  return (
    <main>
      {portfolios.map((portfolio, index) => (
        <ItemPortfolio
          key={index}
          link={portfolio.link}
          image={portfolio.image}
          title={portfolio.title}
        ></ItemPortfolio>
      ))}
    </main>
  )
}

export default Portfolio

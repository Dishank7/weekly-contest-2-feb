import React from "react"


const CoinApp = ({coinData}) => {
  console.log(coinData)
    return(
        <table className="table">
          {
            coinData.map( (value) => {

                const priceChange = parseFloat(value.price_change_24h);

                // Determine the color based on the condition
                const color = priceChange > 0 ? 'green' : priceChange < 0 ? 'red' : 'inherit'

                return(
                   
                        <tr>
                            <td><img src={value.image} alt="coin-img"/></td>
                            <td>{value.name}</td>
                            <td>{value.symbol}</td>
                            <td>${value.total_supply}</td>
                            <td>${value.total_volume}</td>
                            <td style={{color}}>{value.price_change_24h}%</td>
                            <td>Mkt Cap :${value.market_cap}</td>
                        </tr>
                    
                )
            })
          }
        </table>
    )
}

export default CoinApp
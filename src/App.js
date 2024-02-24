import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import CoinApp from "./Component/CoinApp";



const App = () =>{

 const [coinData , setCoinData] = useState('');

 useEffect(()=>{

 const fetchData = async () => {
    try {
      const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
      setCoinData(response.data);
     
    } catch (error) {
      alert('Something Went Wrong')
    }
  };

  fetchData();
    
 },[])

    return(
        <div>
          {
            coinData &&  <CoinApp coinData={coinData}/>
          }
        
        </div>
    )
}

export default App
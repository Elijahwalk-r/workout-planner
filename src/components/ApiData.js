import React, { useState, useEffect } from "react";
import axios from "axios";

const ApiData = () => {
  // state hook to hold changing quote
  const [quote, setQuote] = useState([])

  // use effect with dependency array for call to be made once on component mount getting API data with axios
  useEffect(() => {
    axios({
      url: "https://api.goprogram.ai/inspiration",
      method: "GET",
      dataResponse: "json"
    }).then((response) => {
        const actualQuote = Object.values(response.data);
        setQuote(actualQuote)
    }).catch((err) => {
      console.log(err.response)
      if (err.response.data === undefined) {
        alert(` ${err.message}. Something went wrong with the API Quote, sorry for the inconvenience!`)
      };
    });
  }, [])
  
    return (
        <div className="apiFlexParent">
            <h2>Quote for the Day</h2>
            <p><span className="quotation">"</span>{quote[0]}<span className="quotation">"</span></p>
            <p> Author: {quote[1]}</p>
        </div>
    )
}

export default ApiData;
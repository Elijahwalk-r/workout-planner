import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './Header';
import Explanation from './Explanation';
import ApiData from './ApiData';
import Footer from './Footer';
import GetExercise from './GetExercise';
import AddExercise from './AddExercise';
import FormDropdown from './FormDropdown';

function App() {
  const [quote, setQuote] = useState([])
  useEffect(() => {
    axios({
      url: "https:/api.goprogram.ai/inspiration",
      method: "GET",
      dataResponse: "json"
    }).then((response) =>{
      const errorHandle = response.request.statusText;
      if(errorHandle === "OK"){
        const actualQuote = Object.values(response.data);
        setQuote(actualQuote) 
      } else {
        throw new Error(errorHandle)
      }
    }).catch((err) => {
      if (err.message === "Not Found"){
        alert("Something went wrong with the API Quote, sorry for the inconvenience!")
      }
    })
  }, [])
  
  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <div className="wrapper descriptionSection">
            <Explanation />
            <ApiData quote={quote}/>
          </div>
        </section>

        <FormDropdown />

        <AddExercise />

        <GetExercise />

      </main>

      <Footer />
    </div>
  );
}

export default App;

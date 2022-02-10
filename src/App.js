import React from 'react';
import foods from './foods.json'
import 'bulma/css/bulma.css';

import {FoodBox} from './component/FoodBox'
import {Search} from './component/Search'
import {useState} from 'react'
import {TodayFood} from './component/TodayFood'


function App() {

  const [search, setSearch] = useState("")

  return (
    
    <div className="App">
    <h1 style={{fontSize: 40}}><b>IronNutrition</b></h1>
    <Search
      search={search}
      setSearch={setSearch}
    />

    <section className="columns">
      <div className="colum is-half" style={{paddingTop: 40}}>
      <FoodBox 
      foods={foods
      .filter
      (food => ((food.name).toLowerCase().includes(search.toLowerCase()))
      )}/>
      </div>
      <div className="colum is-half" style={{paddingTop: 40}}>
      <TodayFood/>
      </div>  
    </section>


    </div>  
  );

}

export default App;

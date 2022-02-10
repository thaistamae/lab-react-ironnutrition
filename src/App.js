import React from 'react';
import foods from './foods.json'
import 'bulma/css/bulma.css';

import {useState} from 'react'
import {FoodBox} from './component/FoodBox'
import {Search} from './component/Search'
import {TodayFood} from './component/TodayFood'
import {AddNewFood} from './component/AddNewFood'

function App() {

  const [search, setSearch] = useState("")
  const [isModalVisible, setisModalVisible] = useState(false)

  return (
    
    <div className="App">
    <h1 style={{fontSize: 40}}><b>IronNutrition</b></h1>
    <button onClick={() => setisModalVisible(true)}>Add Foods!</button>        
    {isModalVisible ? <AddNewFood closeModal={setisModalVisible}/> : null}

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

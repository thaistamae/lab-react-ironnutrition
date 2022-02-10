import React from 'react';
import {useState} from 'react'


export function FoodBox({foods}){

    const [qtd, setQtd] = useState(0)

    function handleQtd(event){
        setQtd(event.target.value)
    }

    console.log(qtd)

    const [infos, setInfos] = useState({
        name: "",
        calories: 0,
    })

    function handleSubmit(food){
        setInfos({ ...infos, name: food.name, calories: food.calories})
        console.log(infos)

    }
    
    return (
    <div>    
    {foods.map((food) => (
        <form key={food.name} onSubmit={handleSubmit}> 
        <div className="box">
            <article className="media">
            <div className="media-left">
            <figure className="image is-64x64">
                <img src={food.image} alt={food.image} />
            </figure>   
            </div>
            <div className="media-content">
            <div className="content">
                <p>
                <strong name="name">{food.name}</strong> <br/>
                <small name="calories">{food.calories} cal</small>
                </p>
            </div>
            </div>
            <div className="media-right">
            <div className="field has-addons">
                <div className="control">
                <input onChange={handleQtd} className="input" type="number" min="0"/>
                </div>
                <div className="control">
                <button type="submit" className="button is-info">
                    +
                </button>
                </div>
            </div>
            </div>
        </article>
        </div>
        </form>
        
    ))}
    </div>
    )
}

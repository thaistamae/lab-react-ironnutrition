import React from 'react';
import {useState} from 'react';

export function AddNewFood(){
    const [form, setForm] = useState({
        name: '',
        calories: 0,
        image: '',
    })
    /* function handleChange(event){
        let value = event.target.value;
        if(event.target.name === 'calories'){
            value = event.target.value
        }
    } */
    return (
        <div>
            <form >
      <div className="field">
        <label className="label">Food Name</label>
        <div className="control">
          <input
            className="input"
            name="name"
                     />
        </div>
      </div>
      <div className="field">
        <label className="label">Food Calories</label>
        <div className="control">
          <input
            type="number"
            className="input"
            name="calories"
          />
        </div>
      </div>
      <div className="field">
        <label className="label">Food Image</label>
        <div className="control">
          <input
            className="input"
            name="image"
          />
        </div>
      </div>
      <div className="field">
        <div className="control">
          <button type="submit" className="button is-link">
            Submit
          </button>
        </div>
      </div>
    </form>
        </div>
    )
}
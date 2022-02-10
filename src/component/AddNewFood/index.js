import React from 'react';
import {useState} from 'react';

export function AddNewFood({closeModal}){
    const [form, setForm] = useState({
        name: '',
        calories: 0,
        image: '',
    })
    


    function handleChange(event) {
      setForm({ ...form, [event.target.name]: event.target.value });
      console.log(form);
    }

    function handleSubmit(event) {
      event.preventDefault();
  
      for (let key in form) {
        if (!form[key]) {
          window.alert(`Gentileza preencher o campo ${key} corretamente`);
          return;
        }
      }
      
      console.log(form)
    }
  
    return (
        <div className="Modal">
        <form onSubmit={handleSubmit}>
          <div className="container">
          <button onClick={() => closeModal(false)}>close form!</button>

            <div className="title">
            <label htmlFor="name" className="label">Food Name</label>
            <input id="name" className="input" name="name" onChange={handleChange}/>
            </div>
            </div>
            <div className="title"></div>
            <label htmlFor="calories" className="label">Food Calories</label>
            <input id="calories" className="input" name="calories" onChange={handleChange}/>
            <div className="title">
            <label htmlFor="image" className="label">Food Image</label>
            <input id="image" className="input" name="image" onChange={handleChange}/>
            </div>
            <button type="submit" className="button is-link">
                Submit
            </button>
          </form>  
          </div>

        
        


    )
}
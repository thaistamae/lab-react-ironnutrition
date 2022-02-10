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
        <div className="field">
        <form onSubmit={handleSubmit}>
        <hr></hr>
          
          <button className="button" onClick={() => closeModal(false)}>Close form!</button>

            <div className="lable">
            <label htmlFor="name" className="label">Food Name</label>
            <input id="name" className="input" name="name" onChange={handleChange}/>
          
            </div>
            <div className="lable"></div>
            <label htmlFor="calories" className="label">Food Calories</label>
            <input id="calories" className="input" name="calories" onChange={handleChange}/>
            <div className="lable">
            <label htmlFor="image" className="label">Food Image</label>
            <input id="image" className="input" name="image" onChange={handleChange}/>
            </div>
            <button type="submit" className="button is-link">
                Submit
            </button>
            <hr></hr>
          </form>  
          
          </div>

        
        


    )
}
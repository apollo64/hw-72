import React from "react";
import './FormDish.css';

const FormDish=({title,price, image, changeDataHanlder,saveHandler, cancelHandler})=>{
    const stanImage = 'https://i.chzbgr.com/full/6029628416/h12E0285A/yep'
    return(
        <form onSubmit={saveHandler}>

        <input className='Input' 
        required={true}

        type='text' name='title'
        placeholder='Enter title of dish'
        defaultValue={title}
        onChange={changeDataHanlder}
        />
        <input className='Input' 
        required={true}

        type='text' name='price'
        placeholder='Enter price of dish'
        defaultValue={price}
        onChange={changeDataHanlder}
        />
        <input className='Input' 
        required={true}

        type='text' name='image'
        placeholder='Enter image url of dish'
        defaultValue={image}
        onChange={changeDataHanlder}
        />
         <img className='formImage' src={image||stanImage} alt='Contacter Image' />
         <div  className='formButtonGroup'>
         <button type='submit'>SAVE</button>
         </div>
         <div className='formCancel'>
         <button type='submit' onClick={cancelHandler}>Cancel</button>
        </div>
        </form>
    )
}

export default FormDish;

import React from "react";
import './FormDish.css';

const FormDish=({title,price, image, changeDataHanlder,saveHandler, cancelHandler})=>{
    const stanImage = 'https://baking-academy.ru/upload/ammina.optimizer/jpg-webp/q80/upload/resize_cache/iblock/3fb/540_800_1/3fbc6a2a286120a62282e179dc29f3ed.webp'
    


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
        type='number' name='price'
        placeholder='Enter price of dish'
        defaultValue={price}
        onChange={changeDataHanlder}
        />
        <input className='Input' 
        required={true}
        type='url' name='image'
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

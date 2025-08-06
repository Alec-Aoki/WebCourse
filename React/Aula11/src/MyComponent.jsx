import React, {useState} from 'react';

function MyComponent(){

    const [car, setCar] = useState({
        year: 2024,
        make: 'Ford',
        model: 'Mustang' 
    });

    function handleYearChange(e){
        // Operador spread (...)
        // Mantém os atributos iniciais do objeto
        // Sem ele, make e model some e fica só year
        setCar(c => ({...c, year:e.target.value}));
    }
    function handleMakeChange(e){
        setCar(c => ({...c, make:e.target.value}));
    }
    function handleModelChange(e){
        setCar(c => ({...c, model:e.target.value}));
    }

    /* ************************************************************************ */

    const [foods, setFoods] = useState(['Apple', 'Orange', 'Banana']);

    function handleAddFood(){
        const newFood = document.getElementById('food-input').value
        document.getElementById('food-input').value = ''

        setFoods(f => [...f, newFood]);
    }
    function handleRemoveFood(index){
        // .filter(ELEMENTO, INDEX_DO_ELEMENTO)
        setFoods(foods.filter((_, i) => i !== index));
    }

    return(
        <div>
            <p> Your favorite car is: {car.year} {car.make} {car.model} </p>

            <input type='number' value={car.year} onChange={handleYearChange}/> <br/>
            <input type='text' value={car.make} onChange={handleMakeChange}/> <br/>
            <input type='text' value={car.model} onChange={handleModelChange}/> <br/>

            <hr/>

            <h2> List of Food </h2>
            <ul>
                {foods.map(
                    (food, index) =>
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>
                )}
            </ul>
            <input type='text' id='food-input' placeholder='Enter food name'/>
            <button onClick={handleAddFood}> Add Food </button>

        </div>
    );
}

export default MyComponent;
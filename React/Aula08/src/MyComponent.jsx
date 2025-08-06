import React, {useState} from 'react';

function MyComponent(){

    // Retorna um array com 2 elementos,
    // uma variável e uma função setter
    const [name, setName] = useState('Name'); // Array destructuring
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        setName('Alec'); // Atualiza a variável e o virtual DOM
        //name = 'Alec'; // Atualizaria a variável mas não o DOM
    }

    const incrementAge = () => {
        setAge(age + 1);
    }

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    }

    return(
        <>
            <div>
                <p> Name: {name} </p>
                <button onClick={updateName}> Set name </button>

                <p> Age: {age} </p>
                <button onClick={incrementAge}> Increment age </button>

                <p> Is employed: {isEmployed ? 'Yes' : 'No'} </p>
                <button onClick={toggleEmployedStatus}> Toggle employed status </button>
            </div>
        </>
    );
}

export default MyComponent
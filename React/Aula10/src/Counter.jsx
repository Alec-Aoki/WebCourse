import React, {useState} from "react";

/* As funções set do useState usam o valor atual da
variável pra atualizar ela, e o React junta atualizações
em grupos pra melhorar perfomance, ou seja, fazer
  useState(count + 1)
  useState(count + 1)
Não soma em 2, mas só em 1, pois é
  useState(count + 1)
  useState(count + 1)
  // UPDATE
Em vez de
  useState(count + 1)
  // UPDATE
  useState(count + 1)
  // UPDATE
*/

function Counter(){

    const [count, setCount] = useState(0);

    const increment = () => {
        // Devemos usar arrow function e a primeira letra
        // do nome ou prevNome para indicar as atualizações
        /* 
        Pega o estado PENDENTE da variável para calcular o PRÓXIMO.
        O React coloca a função updater em uma fila em vez de agrupar
        ela.
        */
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    const decrement = () => {
        /*
        Pega o estado ATUAL da variável para calcular o PRÓXIMO.
        */
        setCount(count - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className='counter-container'>
            <p className = 'counter-display'> {count} </p>
            
            <button className='counter-button' onClick={decrement}> Decrement </button>
            <button className='counter-button' onClick={increment}> Increment </button>
            <button className='counter-button' onClick={reset}> Reset </button>
        </div>
    );
}

export default Counter
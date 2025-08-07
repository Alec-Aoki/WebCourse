/* useEffect(function, [dependencies])
Hook que fala pro React executar um código quando:
- O componente é renderizado: useEffect(() => {})
- O componente é montado: useEffect(() => {},[])
- O componente é montado e quando o valor das dependências muda:
                            useEffect(() => {},[value])
*/
import React, {useState, useEffect} from 'react';

function MyComponent(){

    const [count, setCount] = useState(0);
    const [color, setColor] = useState('green');

    useEffect(() => {
        document.title = `Count: ${count} ${color}`;
    }, [count, color]);

    function addCount(){
        setCount(c => c + 1);
    }
    function subtractCount(){
        setCount(c => c - 1);
    }
    function changecolor(){
        setColor(c => c === 'green' ? 'red' : 'green');
    }

    /* ****************************************************** */

    const [width, setWidth] = useState(window.innerWidth);
    const [height, setHeight] = useState(window.innerHeight);

    // Se usássemos só o event listener puro, sem o useEffect,
    // criaríamos milhares de event listeners. Usando o useEffect,
    // podemos criar um só durante a montagem.
    useEffect(() => {
        window.addEventListener('resize', handleResize);

        // Removendo o event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, []);

    function handleResize(){
        setWidth(window.innerWidth);
        setHeight(window.innerHeight);
    }

    return(
        <>
        <p style={{color: color}}> Count: {count} </p>
        <button onClick={addCount}> Add </button>
        <button onClick={subtractCount}> Subtract </button>
        <button onClick={changecolor}> Change Color </button>

        <hr/>

        <p> Width: {width}px </p>
        <p> Height: {height}px </p>
        </>
    );
}

export default MyComponent;
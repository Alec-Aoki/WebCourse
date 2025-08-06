
function Button(){

    // e for event
    const handleClick = (e) => {
        e.target.textContent = 'OUCH!'; // Muda o texto dentro do botão
    }


    // OBS: caso usássemos uma função de callback com (),
    // ela vai ser automaticamente chamada na hora. Para
    // evitar isso, podemos colocar a função de callback
    // dentro de outra função. Ex:
    // <button onClick={() => handleClick()}> Click me </button>
    return(
        <>
            <button onClick={(e) => handleClick(e)}> Click me </button>
        </>
    );
}

export default Button
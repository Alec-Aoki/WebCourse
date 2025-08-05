/* CSS Inline */
/*
Usa um objeto js
Recomendado para estilos simples e
únicos

Perceba que não podemos usar -, então
mudamos para camelCase
Todos os valores devem ser strings
Em vez de ; deve ser ,
*/
function Button(){
    const styles = {
        backgroundColor: 'hsl(200, 100%, 50%)',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer'
    }

    return(
        <button style={styles}> Click me </button>
    );
}

export default Button
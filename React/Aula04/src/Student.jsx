// O parâmetro props é um objeto js que vai
// receber os parâmetros passados pelo componente
// pai

function Student({name='Guest', age=0, isStudent=false}){
    return(
        <div className='student'>
            <p> Name: {name} </p>
            <p> Age: {age} </p>
            <p> Student: {isStudent ? 'Yes' : 'No'} </p>
        </div>
    );
}

export default Student
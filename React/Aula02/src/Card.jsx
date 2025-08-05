// Componente Card
import profilePic from './assets/scott_pilgrim.jpeg'

function Card(){
    return(
        // class é um nome reservado, então
        // temos que usar className
        <div className='card'>
            <img className='card-image' src={profilePic} alt='profile picture'></img> {/* Imagem */}
            <h2 className='card-title'> Alec Aoki </h2> {/* Título */}
            <p className='card-text'> Bacharelando em Ciência da Computacação na USP </p> {/* Descrição */}
        </div>
        
    );
}

export default Card
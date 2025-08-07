/* useContext()
Hook que permite o compartilhamento de valores
entre múltiplos níveis de componentes sem passar
props entre cada nível */
import ComponentC from "./ComponentC.jsx"

function ComponentB(){


    return(
        <div className='box'>
            <h1> ComponentB </h1>
            <ComponentC/>
        </div>
    );
}

export default ComponentB
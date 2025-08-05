/* Props */
/* Propriedades read-only que são compartilhadas
entre componentes. Um componente pai pode mandar
pares chave-valor para um componente filho */

import Student from './Student.jsx'

function App() {
  return(
    <>
      {/* Quando estamos mandando pares chave-valor
      para um componente filho, caso o valor não seja
      uma string literal, temos que usar {} */}
      <Student name={'Spongebob'} age={30} isStudent={true}/>
      <Student name={'Patrick'} age={42} isStudent={false}/>
      <Student name={'Squidward'} age={50} isStudent={false}/>
      <Student name={'Sandy'} age={32} isStudent={true}/>
      <Student/>
    </>
  );
}

export default App

/* Hooks */
/* Função especial que permite componentes usarem
propriedades do React sem usar classes */

/* useState()
Hook que permite a criação de um variável com estado
(state) E uma função setter pra atualizar seu valor
no DOM virtual */

import MyComponent from "./MyComponent.jsx";
import Counter from "./Counter.jsx";

function App() {
  return(
    <>
      {/* <MyComponent/> */}
      <Counter/>
    </>
  );
}

export default App

/* useContext()
Hook que permite o compartilhamento de valores
entre múltiplos níveis de componentes sem passar
props entre cada nível */

/* Componente PROVIDER
1. import {createContext} from 'react';
2. export const MyContext = createContext();
3. <MyContext.Provider value={value}>
        <Child />
    </MyContext.Provider> */

/* Componente CONSUMER
1. import React, {useContext} from 'react';
    import {MyContext} from './ComponentA';
2. const value = useContext(MyContext); */

import ComponentA from "./ComponentA.jsx"

function App() {

  return(
    <>
      <ComponentA/>
    </>
  );
}

export default App

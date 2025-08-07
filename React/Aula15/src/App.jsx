// OBS: useState() causa a re-renderização
// do componente quando seu valor muda

/* useRef()
Não causa a re-renderização quando o valor muda */

import MyComponent from "./MyComponent.jsx"

function App() {
  
  return(
    <MyComponent/>
  );
}

export default App

import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'

// OBS: para inserir js dentro do return, usar {}
// Fora do return, não precisa de {}

function App() {
  return(
    <> {/* Fragment */}
      <Header/> {/* <Header></Header> é equivalente */}
      <Food/>
      <Food/>
      <Footer/> 
    </>
  );
}

export default App

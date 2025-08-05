// JSX: Javascript XML
function Header(){

    // Podemos retornar tags de html dentro do return
    // O return só pode ter um elemento, mas esse elemento
    // pode ter filhos
    return (
        <header>
            <h1> My Website </h1>
            <nav>
                <ul>
                    <li> <a href="#"> Home </a> </li>
                    <li> <a href="#"> About </a> </li>
                    <li> <a href="#"> Services </a> </li>
                    <li> <a href="#"> Contact </a> </li>
                </ul>
            </nav>
            <hr></hr>
        </header>        
    );
}

export default Header
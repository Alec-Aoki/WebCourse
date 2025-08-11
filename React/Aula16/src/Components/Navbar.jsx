import {Link} from "react-router-dom"

function Navbar(){
    return(
        <>
            <Link to="/"> 
                <button> Home </button>
            </Link>
            <Link to="/page1">
                <button> Page 1 </button>
            </Link>
            <Link to="/page2">
                <button> Page 2 </button>
            </Link>
            <Link to="/page3">
                <button> Page 3 </button>
            </Link>
            <Link to="/page4">
                <button> Page 4 </button>
            </Link>
        </>
    )
}

export default Navbar
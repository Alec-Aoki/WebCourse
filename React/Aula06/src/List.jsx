
function List(){

    const fruits = ['apple', 'orange', 'banana', 'coconut', 'pineapple']
    
    const listItems = fruits.map(fruit => <li> {fruit} </li>)

    return(
        <ul> {listItems} </ul>
    );

    // return fruits resulta em appleorangebananacoconutpineapple
}

export default List
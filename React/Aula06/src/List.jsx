
function List({items = [], category = 'Category'}){    
    // const fruits = ['apple', 'orange', 'banana', 'coconut', 'pineapple']
    // const listItems = fruits.map(fruit => <li> {fruit} </li>)

    // Ordem alfabética
    //fruits.sort((a, b) => a.name.localeCompare(b.name));

    // Ordem alfabética reversa
    //fruits.sort((a, b) => b.name.localeCompare(a.name));

    // Ordem númerica ascendente (calorias)
    //fruits.sort((a, b) => a.cal - b.cal);

    // Ordem númerica descendente (calorias)
    //fruits.sort((a, b) => b.cal - a.cal);

    /*
    const lowCalFruits = fruits.filter(fruit => fruit.cal < 100);
    const highCalFruits = fruits.filter(fruit => fruit.cal > 100);
    */

    const itemList = items;
    const listCategory = category;

    // Quando estamos lidando com objetos, precisamos de uma key pra cada tag
    const listItems = itemList.map(
        item => 
            <li key={item.id}>
                {item.name}: <b>{item.cal}</b> cal
            </li>
    );

    return(
        <>
            <h3 className='list-category'> {listCategory} </h3>
            <ol className='list-items'> {listItems} </ol>
        </>
    );

    // return fruits resulta em appleorangebananacoconutpineapple
}

export default List
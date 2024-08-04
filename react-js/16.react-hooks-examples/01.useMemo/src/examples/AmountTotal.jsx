import { useState, useMemo } from "react";
// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent

const AmountTotal = () => {
    const [items] = useState([
        { name: "Chocolates", price: 10, id: 1 },
        { name: "Chips", price: 20, id: 2 },
        { name: "Onion", price: 30, id: 3 },
        { name: "Tomato", price: 30, id: 4 },
        // Add more items as needed
        { name: "Peas", price: 110, id: 5 },
        { name: "Cheese", price: 200, id: 6 },
    ]);

    // Your code starts here
    const totalPrice = useMemo(() => {
        let sum = 0;
        for (let i = 0; i < items.length; i++) {
            sum += items[i].price;
        }
        return sum;
    }, [items]);
    // Your code ends here
    return (
        <div>
            <h1>Total Amount of list items!</h1>
            <ul>
                {items.map(item => (
                    <li key={item.id}>
                        Price: ${item.price} - item: {item.name}
                    </li>
                ))}
            </ul>
            <h3>Total price: {totalPrice}</h3>
            <hr />
        </div>
    );
};

export default AmountTotal;

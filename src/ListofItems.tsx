import { useState } from 'react';
import './App.css'


// Interface
interface List_group_props {
    items: string[];
    heading: string;
    // Pass function to the parent component
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem} : List_group_props) {
    

    // UseState hook
    const [SelectedIndex, SetSelectedIndex] = useState(-1);

    return <>
    <h1>{heading}</h1>
    <ul className="List-group">
        {items.map((item, index) => (
                
                <li 
                key={item} 
                className= {SelectedIndex === index ? "List-items-highlighted" : "List-items"}
                onClick={() => {
                    SetSelectedIndex(index);
                    onSelectItem(item);
                }}>
                    {item}
                </li>
                
        ))}
    </ul>
    </>
    
}

export default ListGroup;
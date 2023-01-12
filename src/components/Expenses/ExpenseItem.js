import "./ExpenseItem.css"
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
// import { useState } from "react";

function ExpenseItem(props) {
    // const [title, setTitle] = useState(props.title);

    // const clickHandler = () => {
    //     console.log(title)
    //     setTitle(("updated"))
    // }
    return (
        <li>
        <Card className="expense-item">
            <ExpenseDate date = {props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <p className="expense-item__price">${props.amount}</p>
                {/* <button onClick= {clickHandler}>Click me</button> */}
            </div>
        </Card>
        </li> 
    )
}

export default ExpenseItem;
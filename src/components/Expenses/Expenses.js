import { useState } from "react";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpenseList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";
import Card from "../UI/Card"

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState('2022');

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    const filterChangeHandler = (selectedYear) => {
        setFilteredYear(selectedYear);
    };

    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={filteredYear}
                onChangeFilter={filterChangeHandler}
            />
            <ExpensesChart expenses = {filteredExpenses} />
            <ExpenseList items = {filteredExpenses}/>

        </Card>
    )
}

export default Expenses;
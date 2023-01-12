// import React, {useState} from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';
import { useState } from 'react';

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveDataExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id : Math.random().toString(),
    }
    props.onAddExpense(expenseData);
  }
  const toggleOpenFormHandler = () => setIsEditing(!isEditing);
  return (
    <div className='new-expense'>
      {!isEditing && <button onClick={toggleOpenFormHandler}>Add Expense</button>}
      {isEditing && <ExpenseForm onSaveExpenseData={saveDataExpenseHandler} onCancel={toggleOpenFormHandler}/>}
    </div>
  );
};

export default NewExpense;
import React from 'react';
import { useState } from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [isFormVisible, setIsFormVisible] = useState(false)

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const renderForm = () => {
    setIsFormVisible(true)
  }

  const clearForm = () => {
    setIsFormVisible(false)
  }

  return (
    <div className='new-expense'>
      {isFormVisible
      ? <ExpenseForm 
      onSaveExpenseData={saveExpenseDataHandler}
      clearForm={clearForm} />
      : <button onClick={renderForm}>Add New Expense</button>
      }
      
    </div>
  );
};

export default NewExpense;

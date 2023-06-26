import React, { useState } from 'react'

const Block1 = () => {
    const [todosArray, settodosArray] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (newTodo.trim() !== '') {
        settodosArray([...todosArray, newTodo]);
      setNewTodo('');
    }
  };

  const handleTodoDelete = (index) => {
    const updatedTodos = [...todosArray];
    updatedTodos.splice(index, 1);
    settodosArray(updatedTodos);
  };
  return (
    <div className='bg-black py-4'>
        <div className='flex justify-center '>
          <h1 className="text-white font-bold text-center py-2">TODO LIST</h1>
        </div>
    <form onSubmit={handleFormSubmit} className="mb-4 text-center">
      <input
        type="text"
        value={newTodo}
        onChange={handleInputChange}
        className="px-4 py-2 border border-gray-300 rounded mr-2"
      />
      <button
        type="submit"
        className="bg-emerald-400 hover:bg-orange-400 text-white px-4 py-2 rounded"
      >
        Add Todo
      </button>
    </form>
    <ul>
      {todosArray.map((items, index) => (
        <li
          key={index}
          className="flex items-center text-white justify-between px-4 py-2 border-b border-gray-300"
        >
          {items}
          <button
            onClick={() => handleTodoDelete(index)}
            className="text-red-500"
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
    </div>
  )
}

export default Block1;


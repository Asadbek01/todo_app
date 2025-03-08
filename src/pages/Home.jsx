import React, { useState, useRef, useEffect } from 'react';
import ToDoLIst from '../components/todo-list';

function Home() {
	const [todos, setTodos] = useState([]);
	const inputText = useRef();

	function addData() {
		const text = inputText.current.value;

		setTodos([...todos, { id: todos.length + 1, text: text, complete: false }]);
		inputText.current.value = null;
	}

	function yangilash(id) {
		const yangiTodo = [...todos];
		const singleTodo = yangiTodo.find(elem => elem.id == id);
		singleTodo.complete = !singleTodo.complete;
		setTodos(yangiTodo);
	}

	useEffect(() => {
		const data = JSON.parse(localStorage.getItem('todos'));
		setTodos(data);
	}, []);

	useEffect(() => {
		localStorage.setItem('todos', JSON.stringify(todos));
	}, [todos]);

	return (
		<>
			<div className='container'>
				<h1>ToDoApp</h1>
				<input
					ref={inputText}
					type='text'
					placeholder='nima ish qilmoqchisiz'
				/>
				<button onClick={addData}>Add ToDo</button>

				<ToDoLIst todos={todos} yangilash={yangilash} />
			</div>
		</>
	);
}

export default Home;

// useState
// Props
//useRef
// useEffect []
//

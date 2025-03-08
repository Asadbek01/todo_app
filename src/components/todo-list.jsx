import React from 'react';
import ToDo from './todo';

function ToDoLIst({ todos, yangilash }) {
	return (
		<>
			{todos.map(elem => (
				<ToDo key={elem.id} todo={elem} yangilash={yangilash} />
			))}
		</>
	);
}

export default ToDoLIst;

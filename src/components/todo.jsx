import React from 'react';

function ToDo({ todo, yangilash }) {
	function updateData() {
		yangilash(todo.id);
	}
	console.log();
	return (
		<>
			<label>
				<div>
					<input
						// onClick={updateData}
						type='checkbox'
						checked={todo.complete}
						onChange={updateData}
					/>
					{todo.text}
				</div>
			</label>
		</>
	);
}

export default ToDo;

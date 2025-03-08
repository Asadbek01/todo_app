import React from 'react';

function Contact({ lorem }) {
	return <div>{lorem.forEach(elem => console.log(elem))}</div>;
}

export default Contact;

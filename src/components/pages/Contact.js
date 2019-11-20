import React from 'react'
import { useForm } from '../../hooks';

import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
const Contact = () => {

	const { values, handleChange, handleSubmit } = useForm(() => {

	}, {
		firstname: '',
		lastname: '',
		email: '',
		subject: '',
		message: ''
	})

	return (
		<div>
			<h1>Contacts</h1>
			<form onSubmit={handleSubmit}>
				<TextFieldGroup
					placeholder="Firstname"
					name="firstname"
					value={values.firstname}
					onChange={handleChange}
				/>
				<TextFieldGroup
					placeholder="Lastname"
					name="lastname"
					value={values.lastname}
					onChange={handleChange}
				/>
				<TextFieldGroup
					placeholder="Email"
					name="email"
					value={values.email}
					onChange={handleChange}
				/>
				<TextFieldGroup
					placeholder="Subject"
					name="subject"
					value={values.subject}
					onChange={handleChange}
				/>
				<TextAreaFieldGroup
					placeholder="Message"
					name="message"
					value={values.message}
					onChange={handleChange}
					info="REEEEE"
				/>
				<input type="submit" value="Submit" className="btn btn-info btn-block mt-4" />
			</form>
		</div>
	)
}

export default Contact;

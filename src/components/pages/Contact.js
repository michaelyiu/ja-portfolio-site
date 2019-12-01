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
			<div className="contact-container">

				<div className="contact-image">
					<img src={require("./../../assets/2b.jpg")} alt="" />
				</div>
				<form onSubmit={handleSubmit}>
					<div className="name">
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
					</div>
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
					// info="REEEEE"
					/>
					<input type="submit" value="Submit" className="btn btn-info btn-block mt-4" />
				</form>
			</div>
		</div>
	)
}

export default Contact;

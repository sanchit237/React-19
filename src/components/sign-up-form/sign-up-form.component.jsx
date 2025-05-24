import { useState } from "react";

import { createAuthUserWithEmailAndPassword } from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
	displayName : '',
	email : '',
	password : '',
	confirmPassword : '',
}

const SignUpForm = () => {
	const [formfields, setFormFields] = useState(defaultFormFields);
	const { displayName, email, password, confirmPassword } = formfields;

	const handleSubmit = async (event) => {
		event.preventDefault();
	}

	const handleChange = (event) => {
		const { name, value } = event.target;

		setFormFields({ ...formfields, [name]: value });
	};

	return (
		<div>
			<p>Sign up with email and password</p>
			<form onSubmit={() => {}}>
				<label>Display Name</label>
				<input type="text" required onChange={handleChange} name="displayName" value={displayName}/>

				<label>Email</label>
				<input type="email" required onChange={handleChange} name="email" value={email}/>

				<label>Password</label>
				<input type="password" required onChange={handleChange} name="password" value={password}/>

				<label>Confirm Password</label>
				<input type="password" required onChange={handleChange} name="confirmPassword" value={confirmPassword}/>

				<button type="submit">Submit</button>
			</form>
		</div>
	)
}


export default SignUpForm;
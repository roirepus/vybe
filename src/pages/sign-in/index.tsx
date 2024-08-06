import * as yup from "yup";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import "../../App.css";
import { PEOPLES_IMAGES } from "../../avatars";
interface FormValues {
	username: string;
	name: string;
}
export const SignIn = () => {

	//validating form data on forntend
	const schema = yup.object().shape({
		username: yup.string().required("Username Required").matches(/^[a-zA-Z0-9_.@$]+$/, "invalid username"),
		name: yup.string().required("name is required"),
	});
	const onSubmit: SubmitHandler<FormValues> = async(data,event) => {
		event?.preventDefault();
		const { username, name } = data;

		const response = await fetch("http://locahost:3000/auth/createUser",{
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				username,
				name,
				image: PEOPLES_IMAGES[Math.floor(Math.random()*PEOPLES_IMAGES.length)],

			})
		})

		if(!response.ok){
			alert("some occured while signing in");
			return
		}
		const responseData = await response.json()
		console.log(responseData)
	}
	const { register, handleSubmit, formState: { errors }, } = useForm <FormValues> ({ resolver: yupResolver(schema), });
	return (
		<div className="sign-in">
			<h1>Lets Vybe!</h1>
			<form action=""onSubmit={handleSubmit(onSubmit)}>
				<div >
					<label >
						Username:
					</label>
					<input type="text" {...register("username")} />{errors.username && <p>{errors.username.message}</p>}
				</div>
				<div>
					<label htmlFor="">
						Name:
					</label>
					<input type="text" {...register("name")} />
				</div>
				<button type="submit">Sign In</button>
			</form>
		</div>
	)
}

import FormField from "../components/FormField";
import FormDataContext from "../context/FormDataContext";
import formConfig from '../data/form.data'
import { useContext } from "react"
import { useNavigate } from "react-router-dom";


export default function Form() {
	
	const {formData, setFormData} = useContext(FormDataContext)
	const navigate = useNavigate()

	const handleSubmit = (e) => {
		e.preventDefault()

        fetch('http://localhost:3000/tasks', {
			method: 'POST',
			body: JSON.stringify(formData),
			headers: {
				"Content-type": "application/json;charset=UTF-8"
			},
		})
		.then(navigate('/tasks/list'))
		.catch(error => console.log('Error creating task',error))
	}


	return (
		<>
			<form
				className="flex flex-col items-center gap-3
					bg-slate-100 rounded-lg
					p-8 w-80 fixed top-1/2 left-1/2
					-translate-x-1/2 -translate-y-1/2
					shadow-lg z-10"
				onSubmit={handleSubmit}
			>

				{formConfig.map( (fieldConfig, i) => (
					<FormField
						key={i}
						{...fieldConfig}
						value={formData[fieldConfig.name]}
						setFormData={setFormData}
					/>
				))}

				<button
					className="p-3 bg-slate-600 rounded-lg w-28 mt-4 text-white"
				>Add</button>

			</form>

		</>
	)
}

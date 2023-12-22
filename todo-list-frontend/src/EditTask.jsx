import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom"



const EditTask = () => {
    const { id } = useParams();
    console.log("task id:", id);
    
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        startDate: "",
        endDate: "",
        status: "",
    });

    useEffect(() => {
        const apiUrl = `http://localhost:4000/task/${id}`;
        console.log("API URL:", apiUrl);
      
        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            setFormData(data);
          })
          .catch((error) => console.error('Error fetching task', error));
      }, [id]);
      



    //     fetch(`http://localhost:4000/task/${id}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         setFormData(data);
    //     })
    //     .catch((error) => console.error('Error fetching task', error));
    // }, [id]);

    const onSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch(`http://localhost:4000/task/${id}`, {
                method: "PUT",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            })

            const responseData = await response.json();
            console.log(responseData);
            if (response.ok) {
                console.log("Task successfully updated");
            } else {
                console.log("Error updating task", responseData.error);
            }
            navigate("/");
        } catch (error) {
            console.log("Error: ", error.message);
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        const isDateField = event.target.type === "date";
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: isDateField? new Date(value).toISOString().split("T")[0] : value,
        }));
    };

    return (
        <form className="m-4 p-4" onSubmit={onSubmit} >
            <div className="m-4">
            <label className="">Title: </label><br />
            <input className="border-solid border border-stone-300 rounded-lg h-10 w-72 p-4" type="text" name="title" value={formData.title} onChange={handleChange}  /><br />
            </div>

            <div className="m-4 mt-8" id="descriptionContainer">
            <label>Description: </label><br />
            <textarea className="border-solid border border-stone-300 rounded-lg h-28 w-72 p-4" name="description" value={formData.description} onChange={handleChange} ></textarea><br />
            </div>

            <div className="m-4 mt-8" >
            <label>Due date: </label><br />
            <input className="border-solid border border-stone-300 rounded-lg px-6 py-2" type="date" name="endDate" value={formData.endDate} onChange={handleChange} /><br />
            </div>

            <div className="m-8 mt-12 mb-12">
                <select className="border-solid border border-stone-300 rounded-lg px-6 py-2" id="status" name="status" value={formData.status} onChange={handleChange}>
                <option selected>Status</option>
                <option value="pending">Pending</option>
                <option value="in progress">In progress</option>
                <option value="completed">Completed</option>
            </select>
            </div>

            <button className="bg-stone-100 rounded-lg px-4 py-2 m-2" type="submit">Submit</button>

        </form>
    );
};

export default EditTask; 
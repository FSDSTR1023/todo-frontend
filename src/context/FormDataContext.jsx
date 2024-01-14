import { createContext, useState } from "react"

const FormDataContext = createContext(null)

export function FormDataProvider({children}) {

    const [formData, setFormData] = useState({
        title: '',
        description: '',
        status: '',
        datestart: '',
        dateend: '',
    })

    const [editId, setEditId] = useState('')

    return (
        <FormDataContext.Provider
            value={{
                formData,
                setFormData,
                editId,
                setEditId
            }}
        >
            {children}
        </FormDataContext.Provider>
    )
}

export default FormDataContext
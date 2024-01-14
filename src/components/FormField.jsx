export default function FormField({
    name,
    label,
    placeholder,
    type,
    options,
    setFormData,
    value
}) {

    const styles = `rounded py-1 px-4
        ${type === 'textarea' && 'h-24'}`

    const parameters = {
        id: name,
        name: name,
        placeholder: placeholder,
        type: type,
        className: styles
    }

    const handleChange = (e) => {
        const {name, value} = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const renderInput = () => {
        switch(type){
            case('select'):
                return (
                    <select {...parameters} onChange={handleChange} value={value}>
                        {options.map(option => (
                            <option
                                key={option.value}
                                value={option.value}
                            >{option.text}</option>
                        ))}
                    </select>
                )
            case('textarea'):
                return <textarea {...parameters} onChange={handleChange} value={value} />
            case('text'):
            default:
                return <input {...parameters} onChange={handleChange} value={value} />
        }
    }

    return (
        <div className="flex flex-col w-full">
            <label htmlFor={name}>{label}</label>
            {renderInput()}
        </div>
    )
}

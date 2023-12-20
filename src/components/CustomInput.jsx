export function CustomInput ({ label, type, name, placeholder }) {
  return (
    <>
      <label htmlFor={name} className='block text-left text-sm font-medium text-gray-900 '>{label}</label>
      <input type={type} id={name} name={name} className='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 ' placeholder={placeholder} />

    </>
  )
}

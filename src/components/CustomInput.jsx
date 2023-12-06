export function CustomInput ({ label, type, name, placeholder }) {
  return (
    <>
      <label for={name} className='block text-left text-sm font-medium text-gray-900 '>{label}</label>
      <input type='text' id={name} name={name} class='block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 ' placeholder={placeholder} />

    </>
  )
}

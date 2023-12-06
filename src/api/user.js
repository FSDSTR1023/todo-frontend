import { BASE_URL } from './constants'

export const loginUser = async ({ username, password }) => {
  const data = {
    username,
    password
  }
  console.log(JSON.stringify(data))
  try {
    const response = await fetch(`${BASE_URL}/users/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const resData = await response.json()
    return resData
  } catch (e) {
    throw new Error(e, 'Error getting user')
  }
}
export const registerUser = async ({ username, password, email }) => {
  const data = {
    username,
    password,
    email
  }
  console.log(JSON.stringify(data))
  try {
    const response = await fetch(`${BASE_URL}/users/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const resData = await response.json()
    return resData
  } catch (e) {
    throw new Error(e, 'Error creating user')
  }
}

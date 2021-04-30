import { firebase } from '../../utils/initAuth'

const users = async (req, res) => {
  if (req.method === 'GET') {
    const value = await firebase.database().ref('users').get()
    const arrayOfUsers = value.val()
    return res.status(200).json({ data: Object.values(arrayOfUsers) })
  }
}

export default users

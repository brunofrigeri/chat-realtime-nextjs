import { firebase } from '../../../utils/initAuth'

const chats = async (req, res) => {
  if (req.method === 'GET') {
    const value = await firebase.database().ref('chat').child(req.query.id).once('value')

    const arrayOfChats = Object.keys(value.val()).map((val) => ({
      userId: val,
      messages: value.val()[val],
    }))

    return res.status(200).json(arrayOfChats)
  }
}

export default chats

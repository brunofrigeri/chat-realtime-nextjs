import { firebase } from '../../../utils/initAuth'

const chat = async (req, res) => {
  if (req.method === 'GET') {
    const value = await firebase
      .database()
      .ref('users')
      .child(req.query.id)
      .child('chats')
      .once('value')
      .then((data) => {
        return Object.values(data.val()).map((val) => {
          return {
            data: {
              name: val.data.name,
              id: val.data.id,
            },
            lastMessage: val.lastMessage,
          }
        })
      })

    return res.status(200).json(value)
  }
}

export default chat

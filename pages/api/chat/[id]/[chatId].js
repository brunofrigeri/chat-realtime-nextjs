import { firebase } from '../../../../utils/initAuth'

const chat = async (req, res) => {
  if (req.method === 'GET') {
    const value = await firebase
      .database()
      .ref('chats')
      .child(req.query.id)
      .child(req.query.chatId)
      .limitToFirst(20)
      .once('value')

    const messages = value.val()
    return res.status(200).json(messages)
  }
}

export default chat

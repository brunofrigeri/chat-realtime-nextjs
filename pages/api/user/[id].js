import firebase from 'firebase'

const user = async (req, res) => {
  if (req.method === 'GET') {
    const value = await firebase.database().ref('users').child(req.query.id).once('value')
    const userInfo = value.val()

    return res.status(200).json({ name: userInfo.name, email: userInfo.email })
  }
}

export default user
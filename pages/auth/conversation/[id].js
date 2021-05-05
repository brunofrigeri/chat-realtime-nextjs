import React from 'react'
import { useRouter } from 'next/router'
import Chat from '../../../components/Chat'

const ConversationById = () => {
  const router = useRouter()

  console.log(router.query)

  return (
    <div className="w-full">
      <Chat />
    </div>
  )
}

export default ConversationById

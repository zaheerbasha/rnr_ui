import Rewards from '@/components/Rewards'
import React from 'react'

type Props = {}

const page = async (props: Props) => {
  const res = await fetch('https://renegades-stage.dev.razorpay.in/reward_type',{
    headers: {
      "Content-Type":"application/json",
      "Authorization": "Basic cm5yOnJucg=="
    }
  })
  const resp = await res.json()
  return (
    <Rewards data={resp}/>
  )
}

export default page
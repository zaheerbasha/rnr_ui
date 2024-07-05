import Profile from '@/components/Profile'
import React from 'react'
import {getEmployeeInfo} from "@/utils/helperBackendFunctions";

type Props = {}

const page = async (props: Props) => {

  const emp =  await getEmployeeInfo()

  const profileUrl = 'http://localhost:8007/profile/' + emp.id

  const res = await fetch(profileUrl,{
    headers: {
      "Content-Type":"application/json",
      "Authorization": "Basic cm5yOnJucg=="
    }
  })
  const resp = await res.json()

  return (
   <Profile data={resp}/>
  )
}

export default page
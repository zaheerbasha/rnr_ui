import Store from '@/components/Store'
import React from 'react'
import {getEmployeeInfo} from "@/utils/helperBackendFunctions";

type Props = {}

const page = async (props: Props)  => {
  console.log("EMP")
  const emp =  await getEmployeeInfo()
  console.log("EMP",emp)
  const storeUrl = 'http://localhost:8007/store/' + emp.id
  const res = await fetch(storeUrl,{
    headers: {
      "Content-Type":"application/json",
      "Authorization": "Basic cm5yOnJucg=="
    },
    cache: 'no-store'
  })
  const resp = await res.json()
  resp["employee"] = emp
  return (
   <Store data={resp}/>
  )
}

export default page
import Dashboard from "@/components/Dashboard";
import { UserSession } from '@/types/userSession'
import Email from "next-auth/providers/email";
import { useSession } from 'next-auth/react'

export default async function Home() {

 


  const res = await fetch('http://localhost:8007/dashboard',{
    headers: {
      "Content-Type":"application/json",
      "Authorization": "Basic cm5yOnJucg=="
    }
  })
  const resp = await res.json()



  return (
    <Dashboard data={resp}/>
  );
}

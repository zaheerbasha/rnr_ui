import { getServerSession } from 'next-auth';


export async function getUserEmail() {
  const session = await getServerSession();
  if (!session) {
    return null;
  }
  return session?.user?.email;
}

export async function getEmployeeInfo() {
  const session = await getServerSession();
  if (!session) {
    return null;
  }
  const email = session?.user?.email;
  console.log(email)
  const empUrl = 'https://renegades-stage.dev.razorpay.in/employee/'+email
  console.log(empUrl)
  const res = await fetch(empUrl,{
    headers: {
      "Content-Type":"application/json",
      "Authorization": "Basic cm5yOnJucg=="
    },
    cache: 'no-store'
  })
  const resp = await res.json()
  if (!resp) {
    return null;
  }
  return resp
}

export async function getUserName() {
  const session = await getServerSession();
  if (!session) {
    return null;
  }
  return session?.user?.name;
}

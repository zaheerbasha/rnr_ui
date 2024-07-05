import { getServerSession } from 'next-auth';


export async function getUserEmail() {
  const session = await getServerSession();
  if (!session) {
    return null;
  }
  return session?.user?.email;
}

export async function getUserName() {
  const session = await getServerSession();
  if (!session) {
    return null;
  }
  return session?.user?.name;
}

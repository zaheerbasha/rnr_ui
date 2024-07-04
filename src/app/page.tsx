'use client'
import Dashboard from "@/components/Dashboard";

export default async function Home() {

  const res = await fetch("https://mp05241bba3bd33bbbef.free.beeceptor.com/data");
  const result = await res.json();

  return (
    <Dashboard data={result}/>
  );
}

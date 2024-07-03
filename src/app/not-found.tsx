import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div>
      <h2>Not Found</h2>
      <Link href="/" className="bg-custom-theme hover:bg-hover-theme text-custom-buttonText rounded-md block p-2 m-4 w-fit">Return Home</Link>
    </div>
  )
}
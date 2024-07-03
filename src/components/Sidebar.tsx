'use client'
import { UserSession } from '@/types/userSession'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
    const session : UserSession | undefined =useSession().data?.user;
  return (
    <div className="grid grid-rows-7 h-full">
        <div className="row-span-1 border-2 border-custom-green"></div>
        <div className="row-span-5 border-custom-pink"></div>
        <div className="row-span-1">
            <div className="flex flex-col items-center">
                <Image 
                className="rounded-full" 
                src={session?.picture!} 
                width={40}
                height={16}
                alt=""/>
                <h2 className="font-medium text-sm">{session?.name!}</h2>
                <h2 className="text-xs">{session?.email!}</h2>
            </div>
        </div>
    </div>
  )
}

export default Sidebar
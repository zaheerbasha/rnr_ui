'use client'
import { UserSession } from '@/types/userSession'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
    const session: UserSession | undefined = useSession().data?.user;
    return (
        <>
            <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-custom-theme dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
                <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                    <ul className="flex flex-col py-4 space-y-1">
                        <li className="px-5 hidden md:block">
                            <div className="flex flex-row items-center h-8">
                                <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Main</div>
                            </div>
                        </li>
                        <li>
                            <Link href="/" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-hover-theme dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-hover-theme dark:hover:border-gray-800 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="/rewards" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-hover-theme dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-hover-theme dark:hover:border-gray-800 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l3 7h7l-5.5 4.5L17 21l-5-3.5L7 21l1.5-7.5L3 9h7l3-7z" />
                                    </svg>
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">Rewards</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-hover-theme dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-hover-theme dark:hover:border-gray-800 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="9" cy="21" r="1" />
                                        <circle cx="20" cy="21" r="1" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h4l2.68 13.39a2 2 0 0 0 1.98 1.61h9.74a2 2 0 0 0 1.98-1.61L23 6H6" />
                                    </svg>
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">Store</span>
                                <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-hover-theme bg-indigo-50 rounded-full">New</span>
                            </Link>
                        </li>
                        <li className="px-5 hidden md:block">
                            <div className="flex flex-row items-center mt-5 h-8">
                                <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Settings</div>
                            </div>
                        </li>
                        <li>
                            <Link href="/profile" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-hover-theme dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-hover-theme dark:hover:border-gray-800 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">Profile</span>
                            </Link>
                        </li>
                        <li>
                            <Link href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-hover-theme dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-hover-theme dark:hover:border-gray-800 pr-6">
                                <span className="inline-flex justify-center items-center ml-4">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                    </svg>
                                </span>
                                <span className="ml-2 text-sm tracking-wide truncate">Settings</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="mb-20 flex flex-col items-center">
                        <Image
                            className="rounded-full"
                            src={session?.picture!}
                            width={40}
                            height={16}
                            alt="" />
                        <h2 className="hidden md:inline font-medium text-sm">{session?.name!}</h2>
                        <h2 className="hidden md:inline text-xs">{session?.email!}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar
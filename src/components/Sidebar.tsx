'use client'
import { UserSession } from '@/types/userSession'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

type Props = {}

const Sidebar = (props: Props) => {
    const session: UserSession | undefined = useSession().data?.user;
    const [activeLink, setActiveLink] = useState<string>('/');

    const handleLinkClick = (path: string) => {
        setActiveLink(path);
    }

    const linkClass = (path: string) => `relative flex flex-row items-center h-11 focus:outline-none ${activeLink === path ? 'bg-hover-theme text-white-800 border-hover-theme dark:bg-gray-600' : 'hover:bg-hover-theme dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-transparent hover:border-hover-theme dark:hover:border-gray-800'} pr-6`;

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
                            <Link href="/" legacyBehavior>
                                <a onClick={() => handleLinkClick('/')} className={linkClass('/')}>
                                    <span className="inline-flex justify-center items-center ml-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/rewards" legacyBehavior>
                                <a onClick={() => handleLinkClick('/rewards')} className={linkClass('/rewards')}>
                                    <span className="inline-flex justify-center items-center ml-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l3 7h7l-5.5 4.5L17 21l-5-3.5L7 21l1.5-7.5L3 9h7l3-7z" />
                                        </svg>
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate">Rewards</span>
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/store" legacyBehavior>
                                <a onClick={() => handleLinkClick('/store')} className={linkClass('/store')}>
                                    <span className="inline-flex justify-center items-center ml-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="9" cy="21" r="1" />
                                            <circle cx="20" cy="21" r="1" />
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h4l2.68 13.39a2 2 0 0 0 1.98 1.61h9.74a2 2 0 0 0 1.98-1.61L23 6H6" />
                                        </svg>
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate">Store</span>
                                    <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-hover-theme bg-indigo-50 rounded-full">New</span>
                                </a>
                            </Link>
                        </li>
                        <li className="px-5 hidden md:block">
                            <div className="flex flex-row items-center mt-5 h-8">
                                <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Others</div>
                            </div>
                        </li>
                        <li>
                            <Link href="/profile" legacyBehavior>
                                <a onClick={() => handleLinkClick('/profile')} className={linkClass('/profile')}>
                                    <span className="inline-flex justify-center items-center ml-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate">My Profile</span>
                                </a>
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="#" legacyBehavior>
                                <a onClick={() => handleLinkClick('/settings')} className={linkClass('/settings')}>
                                    <span className="inline-flex justify-center items-center ml-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <g id="🔍-Product-Icons" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                                                <g id="ic_fluent_code_24_filled" fill="none" stroke="currentColor" fillRule="nonzero">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8.08552717,18.6109241 L14.0816718,4.606402 C14.29905,4.09869621 14.8868467,3.86333916 15.3945525,4.08071734 C15.8659936,4.28256849 16.1026034,4.80381113 15.9599543,5.2837422 L15.9202372,5.393598 L9.92409249,19.3981201 C9.70671432,19.9058259 9.11891763,20.1411829 8.61121183,19.9238048 C8.13977074,19.7219536 7.90316096,19.200711 8.04581001,18.7207799 L8.08552717,18.6109241 L14.0816718,4.606402 L8.08552717,18.6109241 Z M2.29289322,11.2928932 L6.29289322,7.29289322 C6.68341751,6.90236893 7.31658249,6.90236893 7.70710678,7.29289322 C8.06759074,7.65337718 8.09532028,8.22060824 7.79029539,8.61289944 L7.70710678,8.70710678 L4.41421356,12 L7.70710678,15.2928932 C8.09763107,15.6834175 8.09763107,16.3165825 7.70710678,16.7071068 C7.34662282,17.0675907 6.77939176,17.0953203 6.38710056,16.7902954 L6.29289322,16.7071068 L2.29289322,12.7071068 C1.93240926,12.3466228 1.90467972,11.7793918 2.20970461,11.3871006 L2.29289322,11.2928932 L6.29289322,7.29289322 L2.29289322,11.2928932 Z M16.2920863,7.29165541 C16.6525868,6.93118795 17.2198191,6.90348437 17.6120964,7.20852722 L17.7062999,7.29172014 L21.7071391,11.2929256 C22.0677642,11.6535837 22.095313,12.2211154 21.7899212,12.613382 L21.7066371,12.7075762 L17.7057978,16.7031054 C17.3150143,17.0933702 16.6818495,17.0929498 16.2915846,16.7021662 C15.9313401,16.341443 15.9039872,15.7741936 16.2092726,15.3821051 L16.2925237,15.287953 L19.5853491,11.9994979 L16.2920216,8.70586898 C15.9015152,8.31532681 15.9015442,7.68216183 16.2920863,7.29165541 Z" id="🎨-Color"></path>
                                                </g>
                                            </g>
                                        </svg>
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate">Developers' Contact</span>
                                </a>
                            </Link>
                        </li> */}
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

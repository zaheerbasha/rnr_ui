'use client'
import { UserSession } from '@/types/userSession';
import { signOut, useSession } from 'next-auth/react';
import '@/styles/darkmode.css'
import Image from 'next/image';
import React, { useState } from 'react'

type Props = {}

const Profile = (props: Props) => {

    const [dark, setDark] = useState(false);
    const session: UserSession | undefined = useSession().data?.user;

    return (
        <div className={dark ? "dark" : ""}>
            <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">

                {/* <!-- Header --> */}
                <div className="fixed w-full flex items-center justify-between h-14 text-white z-10">
                    <div className="flex items-center justify-start md:justify-center pl-3 w-14 md:w-64 h-14 bg-custom-theme dark:bg-gray-800 border-none">
                        <Image className="w-7 h-7 md:w-10 md:h-10 mr-2 rounded-md overflow-hidden" alt="" width={28} height={28} src={"/razorpay_logo.png"} />
                        <span className="hidden md:block">Rewards & Recognition</span>
                    </div>
                    <div className="flex justify-between items-center h-14 bg-custom-theme dark:bg-gray-800">
                        <div className={`bg-white rounded flex items-center mr-4 p-2 shadow-sm border border-gray-200 w-[calc(100vw-232px)] md:w-[calc(100vw-432px)]`}>
                            <button className="outline-none focus:outline-none">
                                <svg className="w-5 text-gray-600 h-5 cursor-pointer" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" stroke="currentColor" viewBox="0 0 24 24"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                            </button>
                            <input type="search" name="" id="" placeholder="Search" className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent" />
                        </div>
                        <ul className="flex items-center w-40">
                            <li>
                                <button
                                    aria-hidden="true"
                                    onClick={() => {
                                        setDark(!dark);
                                    }}
                                    className="group p-2 transition-colors duration-200 rounded-full shadow-md bg-blue-200 hover:bg-blue-200 dark:bg-gray-50 dark:hover:bg-gray-200 text-gray-900 focus:outline-none"
                                >
                                    {dark ? <svg
                                        x-show="isDark"
                                        width="24"
                                        height="24"
                                        className="fill-current text-gray-700 group-hover:text-gray-500 group-focus:text-gray-700 dark:text-gray-700 dark:group-hover:text-gray-500 dark:group-focus:text-gray-700"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke=""
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                                        />
                                    </svg>
                                        : <svg
                                            x-show="!isDark"
                                            width="24"
                                            height="24"
                                            className="fill-current text-gray-700 group-hover:text-gray-500 group-focus:text-gray-700 dark:text-gray-700 dark:group-hover:text-gray-500 dark:group-focus:text-gray-700"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke=""
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                                            />
                                        </svg>}
                                </button>
                            </li>
                            <li>
                                <div className="block w-px h-6 mx-3 bg-gray-400 dark:bg-gray-700"></div>
                            </li>
                            <li>
                                <a href="#" className="flex items-center mr-4 hover:text-blue-100" onClick={() => {
                                    signOut();
                                }}>
                                    <span className="inline-flex mr-1">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                                    </span>
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* <!-- ./Header --> */}

                {/* <!-- Sidebar --> */}
                <div className="fixed flex flex-col top-14 left-0 w-14 hover:w-64 md:w-64 bg-custom-theme dark:bg-gray-900 h-full text-white transition-all duration-300 border-none z-10 sidebar">
                    <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
                        <ul className="flex flex-col py-4 space-y-1">
                            <li className="px-5 hidden md:block">
                                <div className="flex flex-row items-center h-8">
                                    <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Main</div>
                                </div>
                            </li>
                            <li>
                                <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-hover-theme dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-hover-theme dark:hover:border-gray-800 pr-6">
                                    <span className="inline-flex justify-center items-center ml-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path></svg>
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate">Dashboard</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-hover-theme dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-hover-theme dark:hover:border-gray-800 pr-6">
                                    <span className="inline-flex justify-center items-center ml-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4"></path></svg>
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate">Board</span>
                                    <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-hover-theme bg-indigo-50 rounded-full">New</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-hover-theme dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-hover-theme dark:hover:border-gray-800 pr-6">
                                    <span className="inline-flex justify-center items-center ml-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"></path></svg>
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate">Messages</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-hover-theme dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-hover-theme dark:hover:border-gray-800 pr-6">
                                    <span className="inline-flex justify-center items-center ml-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"></path></svg>
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate">Notifications</span>
                                    <span className="hidden md:block px-2 py-0.5 ml-auto text-xs font-medium tracking-wide text-red-500 bg-red-50 rounded-full">1.2k</span>
                                </a>
                            </li>
                            <li className="px-5 hidden md:block">
                                <div className="flex flex-row items-center mt-5 h-8">
                                    <div className="text-sm font-light tracking-wide text-gray-400 uppercase">Settings</div>
                                </div>
                            </li>
                            <li>
                                <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-hover-theme dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-hover-theme dark:hover:border-gray-800 pr-6">
                                    <span className="inline-flex justify-center items-center ml-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate">Profile</span>
                                </a>
                            </li>
                            <li>
                                <a href="#" className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-hover-theme dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-hover-theme dark:hover:border-gray-800 pr-6">
                                    <span className="inline-flex justify-center items-center ml-4">
                                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </span>
                                    <span className="ml-2 text-sm tracking-wide truncate">Settings</span>
                                </a>
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
                {/* <!-- ./Sidebar --> */}


                <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
                    <div className="bg-gray-50">
                        <div className="min-h-full">

                            <div className="bg-hover-theme dark:bg-gray-800 flex justify-between">
                                <div className=" max-w-7xl px-4 py-6 bg-hover-theme dark:bg-gray-800 sm:px-6 lg:px-8 hidden lg:block md:block">

                                    <Image className=" flex-1 w-48 h-48 rounded-full shadow-lg" width={192} height={192} src={session?.picture!} alt="" />
                                </div>
                                <div className="flex flex-col bg-custom-blue  max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                                    <h1 className="text-center text-3xl font-sans tracking-tight">
                                        {session?.name}
                                    </h1>
                                    <p className="ml-10">Sr. HR Administrator</p>
                                </div>

                                <div className="bg-hover-theme dark:bg-gray-800 mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

                                    <div className="flex justify-between">

                                        {/* <!-- Content --> */}
                                        <div className="flex-1">
                                            {/* <!-- Rest of content --> */}
                                        </div>

                                        {/* <!-- Buttons --> */}
                                        <div className="hidden lg:block md:block">
                                            <div className="flex space-x-4 ">
                                                <button className="bg-custom-theme dark:bg-gray-100 dark:text-gray-800 hover:text-blue-100 text-white px-2 py-1 rounded-md">Request a Change</button>
                                                <button className="bg-gray-500 hover:text-blue-100 text-white px-2 py-1 rounded-md">Settings</button>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                            </div>
                            <main>
                                <div className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800 max-w-7xl py-0 ">
                                    <div className="md:flex no-wrap md:-mx-2  ">
                                        {/* <!-- Left Side --> */}

                                        <div className=" w-full md:w-3/12 ">

                                            <div className=" p-3 ">

                                                <ul className="divide-y dark:divide-gray-700 dark:bg-gray-800 dark:text-gray-400 -mt-3 text-sm font-semibold text-gray-700 hover:text-gray-500 py-2 px-3 rounded">
                                                    <li className="items-center py-3">
                                                        <span>801-724-6600 Ext.1272</span><br />
                                                        <span className="ml-auto">415-555-8965</span>

                                                    </li>
                                                    <li className="items-center py-3">
                                                        <h1>Hire date</h1>
                                                        <span>Jan 19 2017</span><br />
                                                        <span className="ml-auto">10m - 15d</span>
                                                    </li>

                                                    <li className=" items-center py-3">
                                                        <span>Full-time</span><br />
                                                        <span className="ml-auto">Human Resources</span>
                                                        <span className="ml-auto">North America</span>
                                                        <span className="ml-auto">Lindon , Utah</span>


                                                    </li>
                                                    <li className="items-center py-3">
                                                        <span>801-724-6600 Ext.1272</span><br />
                                                        <span className="ml-auto">415-555-8965</span>

                                                    </li>
                                                    <li className="items-center py-3">
                                                        <h1>Hire date</h1>
                                                        <span>Jan 19 2017</span><br />
                                                        <span className="ml-auto">10m - 15d</span>
                                                    </li>

                                                    <li className=" items-center py-3">
                                                        <span>Full-time</span><br />
                                                        <span className="ml-auto">Human Resources</span>
                                                        <span className="ml-auto">North America</span>
                                                        <span className="ml-auto">Lindon , Utah</span>


                                                    </li>
                                                    <li className="items-center py-3">
                                                        <span>801-724-6600 Ext.1272</span><br />
                                                        <span className="ml-auto">415-555-8965</span>

                                                    </li>
                                                    <li className="items-center py-3">
                                                        <h1>Hire date</h1>
                                                        <span>Jan 19 2017</span><br />
                                                        <span className="ml-auto">10m - 15d</span>
                                                    </li>

                                                    <li className=" items-center py-3">
                                                        <span>Full-time</span><br />
                                                        <span className="ml-auto">Human Resources</span>
                                                        <span className="ml-auto">North America</span>
                                                        <span className="ml-auto">Lindon , Utah</span>


                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        {/* <!-- Right Side --> */}
                                        <div className="w-full mx-2   md:block lg:block md:-mt-24 sm:mt-0">
                                            {/* <!-- Profile tab --> */}
                                            {/* <!-- About Section --> */}
                                            <div className="hidden md:block lg:block">
                                                <ul className="flex divide-y dark:divide-gray-700 dark:bg-gray-800">
                                                    <li className=" mr-1">
                                                        <a className="rounded-sm inline-block border-l border-t border-r rounded-t py-2 px-4 font-semibold shadow-md" href="#">Personal</a>
                                                    </li>
                                                    <li className="mr-1">
                                                        <a className="rounded-sm inline-block border-l border-t border-r rounded-t py-2 px-4 hover:text-blue-100 font-semibold" href="#">Job</a>
                                                    </li>
                                                    <li className="mr-1">
                                                        <a className="rounded-sm inline-block py-2 px-4 border-l border-t border-r rounded-t hover:text-blue-100 font-semibold" href="#">leave</a>
                                                    </li>
                                                    <li className="mr-1">
                                                        <a className="rounded-sm inline-block py-2 px-4 border-l border-t border-r rounded-t hover:text-blue-100 font-semibold" href="#">Emergency</a>
                                                    </li>
                                                    <li className="mr-1">
                                                        <a className="rounded-sm inline-block py-2 px-4 border-l border-t border-r rounded-t hover:text-blue-100 font-semibold" href="#">Document</a>
                                                    </li>
                                                    <li className="mr-1">
                                                        <a className="rounded-sm inline-block py-2 px-4 border-l border-t border-r rounded-t hover:text-blue-100 font-semibold" href="#">Notes</a>
                                                    </li>

                                                    <li className="mr-1">
                                                        <a className="inline-block py-2 px-4 border-l border-t border-r rounded-t hover:text-blue-100 font-semibold" href="#">Benefits</a>
                                                    </li>

                                                    <li className="mr-1">
                                                        <a className="inline-block py-2 px-4 border-l border-t border-r rounded-t hover:text-blue-100 font-semibold" href="#">Training</a>
                                                    </li>

                                                    <li className="mr-1">
                                                        <a className="inline-block py-2 px-4 border-l border-t border-r rounded-t hover:text-blue-100 font-semibold" href="#">performance</a>
                                                    </li>
                                                    <li className="mr-1">
                                                        <a className="inline-block py-2 px-4 border-l border-t border-r rounded-t hover:text-blue-100 font-semibold" href="#">Assets</a>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="p-3 rounded-sm ">

                                                <div className="flex items-center space-x-2 font-semibold leading-8 dark:divide-gray-700 dark:bg-gray-800">
                                                    <span className="text-green-500">
                                                        <svg className="h-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                                                        </svg>
                                                    </span>
                                                    <span className="tracking-wide px-2">Personal</span>
                                                </div>
                                                <div className="flex my-2 py-1">
                                                    <span className="cursor-pointer tracking-wide px-2 bg-custom-theme dark:bg-gray-100 dark:text-gray-800 text-white rounded-md shadow-xl">Upload</span>
                                                    <span className="tracking-wide px-2">Files</span>
                                                </div>
                                                {/* <!-- the document logo and stuff --> */}
                                            </div>
                                            {/* <!-- End of about section --> */}

                                            <div className="my-1 "></div>

                                            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 sm:block ">
                                                <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                                                    <table className="min-w-full divide-y divide-gray-200 ">

                                                        <tbody className="divide-y dark:divide-gray-700 dark:bg-gray-800 dark:text-gray-100  bg-white divide-gray-200  ">
                                                            <tr className="hover:bg-gray-100 dark:hover:bg-gray-900">
                                                                <td className="px-4 py-4 text-sm font-medium ">
                                                                    <div>
                                                                        <h2 className="font-medium">Resume and Applications</h2>
                                                                    </div>
                                                                </td>
                                                            </tr>

                                                            <tr className="hover:bg-gray-100 dark:hover:bg-gray-900">
                                                                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                                    <div>
                                                                        <h2 className="font-medium">Signed Documents</h2>

                                                                    </div>
                                                                </td>
                                                            </tr>


                                                            <tr className="hover:bg-gray-100 dark:hover:bg-gray-900">
                                                                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                                    <div>
                                                                        <h2 className="font-medium">Tasklist Attachments</h2>

                                                                    </div>
                                                                </td>

                                                            </tr>

                                                            <tr className="hover:bg-gray-100 dark:hover:bg-gray-900">
                                                                <td className="px-4 py-4 text-sm font-medium whitespace-nowrap">
                                                                    <div>
                                                                        <h2 className="font-medium">Workflow Attachments</h2>

                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                            {/* <!-- End of profile tab --> */}

                                            {/* <!-- Client Table --> */}
                                            <div className="mt-4 mx-4">
                                                <div className="w-full overflow-hidden rounded-lg shadow-xs">
                                                    <div className="w-full overflow-x-auto">
                                                        <table className="w-full">
                                                            <thead>
                                                                <tr className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b dark:border-gray-700 bg-gray-50 dark:text-gray-400 dark:bg-gray-800">
                                                                    <th className="px-4 py-3">Client</th>
                                                                    <th className="px-4 py-3">Amount</th>
                                                                    <th className="px-4 py-3">Status</th>
                                                                    <th className="px-4 py-3">Date</th>
                                                                </tr>
                                                            </thead>
                                                            <tbody className="bg-white divide-y dark:divide-gray-700 dark:bg-gray-800">
                                                                <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                                                                    <td className="px-4 py-3">
                                                                        <div className="flex items-center text-sm">
                                                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                                                <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                                                                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                                            </div>
                                                                            <div>
                                                                                <p className="font-semibold">Hans Burger</p>
                                                                                <p className="text-xs text-gray-600 dark:text-gray-400">10x Developer</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="px-4 py-3 text-sm">$855.85</td>
                                                                    <td className="px-4 py-3 text-xs">
                                                                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> Approved </span>
                                                                    </td>
                                                                    <td className="px-4 py-3 text-sm">15-01-2021</td>
                                                                </tr>
                                                                <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                                                                    <td className="px-4 py-3">
                                                                        <div className="flex items-center text-sm">
                                                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                                                <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;facepad=3&amp;fit=facearea&amp;s=707b9c33066bf8808c934c8ab394dff6" alt="" loading="lazy" />
                                                                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                                            </div>
                                                                            <div>
                                                                                <p className="font-semibold">Jolina Angelie</p>
                                                                                <p className="text-xs text-gray-600 dark:text-gray-400">Unemployed</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="px-4 py-3 text-sm">$369.75</td>
                                                                    <td className="px-4 py-3 text-xs">
                                                                        <span className="px-2 py-1 font-semibold leading-tight text-yellow-700 bg-yellow-100 rounded-full"> Pending </span>
                                                                    </td>
                                                                    <td className="px-4 py-3 text-sm">23-03-2021</td>
                                                                </tr>
                                                                <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                                                                    <td className="px-4 py-3">
                                                                        <div className="flex items-center text-sm">
                                                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                                                <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1502720705749-871143f0e671?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;s=b8377ca9f985d80264279f277f3a67f5" alt="" loading="lazy" />
                                                                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                                            </div>
                                                                            <div>
                                                                                <p className="font-semibold">Dave Li</p>
                                                                                <p className="text-xs text-gray-600 dark:text-gray-400">Influencer</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="px-4 py-3 text-sm">$775.45</td>
                                                                    <td className="px-4 py-3 text-xs">
                                                                        <span className="px-2 py-1 font-semibold leading-tight text-gray-700 bg-gray-100 rounded-full dark:text-gray-100 dark:bg-gray-700"> Expired </span>
                                                                    </td>
                                                                    <td className="px-4 py-3 text-sm">09-02-2021</td>
                                                                </tr>
                                                                <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                                                                    <td className="px-4 py-3">
                                                                        <div className="flex items-center text-sm">
                                                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                                                <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1551006917-3b4c078c47c9?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                                                                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                                            </div>
                                                                            <div>
                                                                                <p className="font-semibold">Rulia Joberts</p>
                                                                                <p className="text-xs text-gray-600 dark:text-gray-400">Actress</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="px-4 py-3 text-sm">$1276.75</td>
                                                                    <td className="px-4 py-3 text-xs">
                                                                        <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-full dark:bg-green-700 dark:text-green-100"> Approved </span>
                                                                    </td>
                                                                    <td className="px-4 py-3 text-sm">17-04-2021</td>
                                                                </tr>
                                                                <tr className="bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-900 text-gray-700 dark:text-gray-400">
                                                                    <td className="px-4 py-3">
                                                                        <div className="flex items-center text-sm">
                                                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                                                <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1566411520896-01e7ca4726af?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                                                                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                                            </div>
                                                                            <div>
                                                                                <p className="font-semibold">Hitney Wouston</p>
                                                                                <p className="text-xs text-gray-600 dark:text-gray-400">Singer</p>
                                                                            </div>
                                                                        </div>
                                                                    </td>
                                                                    <td className="px-4 py-3 text-sm">$863.45</td>
                                                                    <td className="px-4 py-3 text-xs">
                                                                        <span className="px-2 py-1 font-semibold leading-tight text-red-700 bg-red-100 rounded-full dark:text-red-100 dark:bg-red-700"> Denied </span>
                                                                    </td>
                                                                    <td className="px-4 py-3 text-sm">11-01-2021</td>
                                                                </tr>
                                                            </tbody>
                                                        </table>
                                                    </div>
                                                    <div className="grid px-4 py-3 text-xs font-semibold tracking-wide text-gray-500 uppercase border-t dark:border-gray-700 bg-gray-50 sm:grid-cols-9 dark:text-gray-400 dark:bg-gray-800">
                                                        <span className="flex items-center col-span-3"> Showing 21-30 of 100 </span>
                                                        <span className="col-span-2"></span>
                                                        {/* <!-- Pagination --> */}
                                                        <span className="flex col-span-4 mt-2 sm:mt-auto sm:justify-end">
                                                            <nav aria-label="Table navigation">
                                                                <ul className="inline-flex items-center">
                                                                    <li>
                                                                        <button className="px-3 py-1 rounded-md rounded-l-lg focus:outline-none focus:shadow-outline-purple" aria-label="Previous">
                                                                            <svg aria-hidden="true" className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                                                                <path d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
                                                                            </svg>
                                                                        </button>
                                                                    </li>
                                                                    <li>
                                                                        <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">1</button>
                                                                    </li>
                                                                    <li>
                                                                        <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">2</button>
                                                                    </li>
                                                                    <li>
                                                                        <button className="px-3 py-1 text-white dark:text-gray-800 transition-colors duration-150 bg-hover-theme dark:bg-gray-100 border border-r-0 border-hover-theme dark:border-gray-100 rounded-md focus:outline-none focus:shadow-outline-purple">3</button>
                                                                    </li>
                                                                    <li>
                                                                        <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">4</button>
                                                                    </li>
                                                                    <li>
                                                                        <span className="px-3 py-1">...</span>
                                                                    </li>
                                                                    <li>
                                                                        <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">8</button>
                                                                    </li>
                                                                    <li>
                                                                        <button className="px-3 py-1 rounded-md focus:outline-none focus:shadow-outline-purple">9</button>
                                                                    </li>
                                                                    <li>
                                                                        <button className="px-3 py-1 rounded-md rounded-r-lg focus:outline-none focus:shadow-outline-purple" aria-label="Next">
                                                                            <svg className="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 20 20">
                                                                                <path d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" fillRule="evenodd"></path>
                                                                            </svg>
                                                                        </button>
                                                                    </li>
                                                                </ul>
                                                            </nav>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!-- ./Client Table --> */}

                                        </div>
                                    </div>
                                </div>
                            </main>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
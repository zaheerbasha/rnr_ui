'use client'
import { UserSession } from '@/types/userSession';
import { useSession } from 'next-auth/react';
import '@/styles/darkmode.css'
import Image from 'next/image';
import React from 'react'

type Props = {}

const Profile = (props: Props) => {
    const session: UserSession | undefined = useSession().data?.user;
    return (
        <>
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
                                            <ul className="flex dark:divide-gray-700 dark:bg-gray-800">
                                                <li className="mr-1">
                                                    <a className="rounded-sm inline-block border-l border-t border-r rounded-t py-2 px-4 hover:text-blue-100 font-semibold shadow-md" href="#">Personal</a>
                                                </li>
                                                <li className="mr-1">
                                                    <a className="rounded-sm inline-block border-l border-t border-r rounded-t py-2 px-4 hover:text-blue-100 font-semibold shadow-md" href="#">Job</a>
                                                </li>
                                                <li className="mr-1">
                                                    <a className="rounded-sm inline-block border-l border-t border-r rounded-t py-2 px-4 hover:text-blue-100 font-semibold shadow-md" href="#">leave</a>
                                                </li>
                                                <li className="mr-1">
                                                    <a className="rounded-sm inline-block border-l border-t border-r rounded-t py-2 px-4 hover:text-blue-100 font-semibold shadow-md" href="#">Emergency</a>
                                                </li>
                                                <li className="mr-1">
                                                    <a className="rounded-sm inline-block border-l border-t border-r rounded-t py-2 px-4 hover:text-blue-100 font-semibold shadow-md" href="#">Document</a>
                                                </li>
                                                <li className="mr-1">
                                                    <a className="rounded-sm inline-block border-l border-t border-r rounded-t py-2 px-4 hover:text-blue-100 font-semibold shadow-md" href="#">Notes</a>
                                                </li>

                                                <li className="mr-1">
                                                    <a className="rounded-sm inline-block border-l border-t border-r rounded-t py-2 px-4 hover:text-blue-100 font-semibold shadow-md" href="#">Benefits</a>
                                                </li>

                                                <li className="mr-1">
                                                    <a className="rounded-sm inline-block border-l border-t border-r rounded-t py-2 px-4 hover:text-blue-100 font-semibold shadow-md" href="#">Training</a>
                                                </li>

                                                <li className="mr-1">
                                                    <a className="rounded-sm inline-block border-l border-t border-r rounded-t py-2 px-4 hover:text-blue-100 font-semibold shadow-md" href="#">performance</a>
                                                </li>
                                                <li className="mr-1">
                                                    <a className="rounded-sm inline-block border-l border-t border-r rounded-t py-2 px-4 hover:text-blue-100 font-semibold shadow-md" href="#">Assets</a>
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
                                            <div className="flex my-4 py-1">
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

                                                    <tbody className="divide-y dark:divide-gray-700 dark:bg-gray-800 dark:text-gray-100 bg-white divide-gray-200">
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
        </>
    )
}

export default Profile
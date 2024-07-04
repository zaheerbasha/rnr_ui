'use client'
import '@/styles/darkmode.css'
import React from 'react'
import Graph from '@/components/Graph'
import Image from 'next/image'

type Props = {}

const Dashboard = (props: Props) => {
    return (
        <>
            <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
                {/* <!-- Statistics Cards --> */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 p-4 gap-4">
                    <div className="bg-custom-theme dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-hover-theme dark:border-gray-600 text-white font-medium group">
                        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                            <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-hover-theme dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl">1,257</p>
                            <p>Visitors</p>
                        </div>
                    </div>
                    <div className="bg-custom-theme dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-hover-theme dark:border-gray-600 text-white font-medium group">
                        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                            <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-hover-theme dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path></svg>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl">$11,257</p>
                            <p>Awarded Points</p>
                        </div>
                    </div>
                    <div className="bg-custom-theme dark:bg-gray-800 shadow-lg rounded-md flex items-center justify-between p-3 border-b-4 border-hover-theme dark:border-gray-600 text-white font-medium group">
                        <div className="flex justify-center items-center w-14 h-14 bg-white rounded-full transition-all duration-300 transform group-hover:rotate-12">
                            <svg width="30" height="30" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="stroke-current text-hover-theme dark:text-gray-800 transform transition-transform duration-500 ease-in-out"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                        </div>
                        <div className="text-right">
                            <p className="text-2xl">$75,257</p>
                            <p>Reedemed Points</p>
                        </div>
                    </div>
                </div>
                {/* <!-- ./Statistics Cards --> */}

                <div className="grid grid-cols-1 lg:grid-cols-2 p-4 gap-4">

                    {/* <!-- Top Achievers --> */}
                    <div className="relative flex flex-col min-w-0 mb-4 lg:mb-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
                        <div className="rounded-t mb-0 px-0 border-0">
                            <div className="flex flex-wrap items-center px-4 py-2">
                                <div className="relative w-full max-w-full flex-grow flex-1 border-b border-custom-blue dark:border-gray-400">
                                    <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">Top Achievers</h3>
                                </div>
                            </div>
                            <div className="block w-full overflow-x-auto">
                                <div className="flex flex-col gap-2 bg-transparent border-collapse">

                                    <div className="flex justify-evenly text-gray-700 dark:text-gray-100">
                                    <Image className="object-cover w-24 h-24 rounded-full" width={96} height={96} src="https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;fit=max&amp;ixid=eyJhcHBfaWQiOjE3Nzg0fQ" alt="" loading="lazy" />
                                        <div className="flex flex-col justify-center">
                                            <div className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap font-bold mx-auto">Star spot Award</div>
                                            <div className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 mx-auto">Star of the HR Team</div>
                                        </div>
                                    </div>

                                    <div className="flex justify-evenly text-gray-700 dark:text-gray-100">
                                    <Image className="object-cover w-24 h-24 rounded-full" width={96} height={96} src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-0.3.5&amp;q=80&amp;fm=jpg&amp;crop=entropy&amp;cs=tinysrgb&amp;w=200&amp;facepad=3&amp;fit=facearea&amp;s=707b9c33066bf8808c934c8ab394dff6" alt="" loading="lazy" />
                                        <div className="flex flex-col justify-center">
                                            <div className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap font-bold mx-auto">Employee Award</div>
                                            <div className="border-t-0 px-4 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-4 mx-auto">Employee of the month</div>
                                        </div>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <!-- ./Top Achievers --> */}

                    {/* <!-- Leaderboard --> */}
                    <div className="relative flex flex-col min-w-0 break-words bg-gray-50 dark:bg-gray-800 w-full shadow-lg rounded">
                        <div className="rounded-t mb-0 px-0 border-0">
                            <div className="flex flex-wrap items-center px-4 py-2">
                                <div className="relative w-full max-w-full flex-grow flex-1 border-b border-custom-blue dark:border-gray-400">
                                    <h3 className="font-semibold text-base text-gray-900 dark:text-gray-50">Leaderboard</h3>
                                </div>
                            </div>
                            {/* <!--Table --> */}
                            <div className="mx-4">
                                <div className="w-full overflow-hidden rounded-lg shadow-xs">
                                    <div className="w-full overflow-x-auto">
                                        <table className="w-full">
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
                                                                <p className="text-xs text-gray-600 dark:text-gray-400">HR Manager</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3 text-xs">
                                                        <span className="px-2 py-1 font-semibold leading-tight rounded-full"> HR </span>
                                                    </td>
                                                    <td className="px-4 py-3 text-sm">$855.85</td>
                                                    <td className="px-4 py-3 text-sm">
                                                        <div className="flex gap-2">
                                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                                <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1581976117747-e2aeb032e082?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=60" alt="" loading="lazy" />
                                                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                            </div>
                                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                                <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1596574744366-27bbd11e9a01?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=60" alt="" loading="lazy" />
                                                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                            </div>
                                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                                <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1572598354620-c32d5ff22ab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=60" alt="" loading="lazy" />
                                                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                            </div>
                                                        </div>
                                                    </td>
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
                                                                <p className="text-xs text-gray-600 dark:text-gray-400">SDE-1</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3 text-xs">
                                                        <span className="px-2 py-1 font-semibold leading-tight rounded-full"> Engineering </span>
                                                    </td>
                                                    <td className="px-4 py-3 text-sm">$369.75</td>
                                                    <td className="px-4 py-3 text-sm">
                                                        <div className="flex gap-2">
                                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                                <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1581976117747-e2aeb032e082?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=60" alt="" loading="lazy" />
                                                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                            </div>
                                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                                <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1596574744366-27bbd11e9a01?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=60" alt="" loading="lazy" />
                                                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                            </div>
                                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                                <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1572598354620-c32d5ff22ab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=60" alt="" loading="lazy" />
                                                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                            </div>
                                                        </div>
                                                    </td>
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
                                                                <p className="text-xs text-gray-600 dark:text-gray-400">UI Designer</p>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-4 py-3 text-xs">
                                                        <span className="px-2 py-1 font-semibold leading-tight"> Product </span>
                                                    </td>
                                                    <td className="px-4 py-3 text-sm">$775.45</td>
                                                    <td className="px-4 py-3 text-sm">
                                                        <div className="flex gap-2">
                                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                                <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1581976117747-e2aeb032e082?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=60" alt="" loading="lazy" />
                                                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                            </div>
                                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                                <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1596574744366-27bbd11e9a01?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=60" alt="" loading="lazy" />
                                                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                            </div>
                                                            <div className="relative hidden w-8 h-8 mr-3 rounded-full md:block">
                                                                <img className="object-cover w-full h-full rounded-full" src="https://images.unsplash.com/photo-1572598354620-c32d5ff22ab3?ixlib=rb-1.2.1&auto=format&fit=crop&w=80&q=60" alt="" loading="lazy" />
                                                                <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                                                            </div>
                                                        </div>
                                                    </td>
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
                                                        <button className="px-3 py-1 text-white dark:text-gray-800 transition-colors duration-150 bg-custom-theme dark:bg-gray-100 border border-r-0 border-custom-theme dark:border-gray-100 rounded-md focus:outline-none focus:shadow-outline-purple">3</button>
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

                        </div>
                    </div>
                </div>
                {/* <!-- ./Table --> */}

                {/* <!-- Different Graphs --> */}
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-2 p-4 gap-4bg-gray-200 dark:bg-gray-800  text-black dark:text-white">
                    <div className="md:col-span-2 xl:col-span-1">
                        <div className="rounded bg-gray-200 dark:bg-gray-800 p-3">
                            <div className="flex justify-between py-1 text-black dark:text-white">
                                <h3 className="text-sm font-semibold">Month</h3>
                            </div>
                            <Graph title={"Awards"} />
                        </div>
                    </div>

                    <div className="md:col-span-2 xl:col-span-1">
                        <div className="rounded bg-gray-200 dark:bg-gray-800 p-3">
                            <div className="flex justify-between py-1 text-black dark:text-white">
                                <h3 className="text-sm font-semibold">Teams</h3>
                            </div>
                            <Graph title={"Awards"} />
                        </div>
                    </div>

                    <div className="md:col-span-2 xl:col-span-1">
                        <div className="rounded bg-gray-200 dark:bg-gray-800 p-3">
                            <div className="flex justify-between py-1 text-black dark:text-white">
                                <h3 className="text-sm font-semibold">Month</h3>
                            </div>
                            <Graph title={"Reedeemed points"} />
                        </div>
                    </div>


                </div>
                {/* <!-- ./Different Graphs --> */}
            </div>
        </>
    )
}

export default Dashboard
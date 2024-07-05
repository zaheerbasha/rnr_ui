'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import QuantityButton from '@/components/QuantityButton'
import ProductSelectionPopup from '@/components/ProductSelectionPopup'
import "@/styles/removescrollbelt.css"
import { toast } from 'react-toastify'

type Props = {}

const Store = (props: Props) => {
    const [popup, setPopup] = useState(false);

    const closePopup = () => {
        setPopup(false);
    }

    return (
        <>
            {popup && <ProductSelectionPopup closePopup={closePopup} />}
            <div className="min-h-[calc(100vh-56px)] h-full bg-gray-300 dark:bg-gray-700 ml-14 mt-14 mb-10 md:ml-64">
                <div className="lg:flex lg:flex-col lg:w-75% mt-5 mx-2">

                    {/* Right Side button */}
                    <div className="flex justify-between mx-4 items-stretch">
                        <div className="bg-custom-theme dark:bg-gray-100 dark:text-gray-800 text-white p-4 font-bold rounded-md">Balance: 2100</div>
                        <button className="block my-auto bg-custom-theme hover:bg-hover-theme dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-gray-500 text-white px-4 py-2 font-bold rounded-md" onClick={() => {
                                        setPopup(true);
                                    }}>Add New Item</button>
                    </div>

                    {/* Shopping Cards*/}
                    <div className="h-[600px] overflow-auto hide-scrollbar my-8 rounded-3xl bg-gray-100 dark:bg-gray-600 mx-12 p-12 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                        <div className="flex justify-center items-center">
                            <div className="flex flex-col w-60 h-96 rounded-xl bg-custom-theme dark:bg-gray-100 dark:text-gray-800 dark:hover:text-gray-500 text-white">
                                <Image className="block mb-2 mx-auto object-fill h-56 w-full rounded-t-xl" width={96} height={96} src="https://contents.mediadecathlon.com/p2153236/8ff54ab7687daad665741f08d7be5d37/p2153236.jpg?format=auto&quality=70&f=650x0" alt="" loading="lazy" />
                                <div className="flex gap-2 justify-between">
                                    <div className="w-24 h-4 ml-4 text-sm font-bold">Adidas Shoes</div>
                                    <div className="text-end w-24 h-6 mr-4 text-sm font-bold">₹ 5000</div>
                                </div>
                                <div className="mt-4 flex flex-col justify-between items-center gap-5">
                                    <QuantityButton />
                                    <button className="bg-custom-green hover:bg-hover-green text-white w-36 p-2 font-bold rounded-md" onClick={()=>{
                                        toast("Purchase Successful !")
                                    }}>
                                        <div className="flex gap-4">
                                            <div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <circle cx="9" cy="21" r="1" />
                                                    <circle cx="20" cy="21" r="1" />
                                                    <path
                                                        d="M1 1h4l2.68 13.39a2 2 0 0 0 1.98 1.61h9.74a2 2 0 0 0 1.98-1.61L23 6H6"
                                                    />
                                                </svg>
                                            </div>
                                            <div>Purchase</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>


                        <div className="flex justify-center items-center">
                            <div className="flex flex-col w-60 h-96 rounded-xl bg-custom-theme dark:bg-gray-100 dark:text-gray-800 dark:hover:text-gray-500 text-white">
                                <Image className="block mb-2 mx-auto object-fill h-56 w-full rounded-t-xl" width={96} height={96} src="https://contents.mediadecathlon.com/p2153236/8ff54ab7687daad665741f08d7be5d37/p2153236.jpg?format=auto&quality=70&f=650x0" alt="" loading="lazy" />
                                <div className="flex gap-2 justify-between">
                                    <div className="w-24 h-4 ml-4 text-sm font-bold">Adidas Shoes</div>
                                    <div className="text-end w-24 h-6 mr-4 text-sm font-bold">₹ 2000</div>
                                </div>
                                <div className="mt-4 flex flex-col justify-between items-center gap-5">
                                    <QuantityButton />
                                    <button className="bg-custom-green hover:bg-hover-green text-white w-36 p-2 font-bold rounded-md">
                                        <div className="flex gap-4">
                                            <div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <circle cx="9" cy="21" r="1" />
                                                    <circle cx="20" cy="21" r="1" />
                                                    <path
                                                        d="M1 1h4l2.68 13.39a2 2 0 0 0 1.98 1.61h9.74a2 2 0 0 0 1.98-1.61L23 6H6"
                                                    />
                                                </svg>
                                            </div>
                                            <div>Purchase</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>


                        <div className="flex justify-center items-center">
                            <div className="flex flex-col w-60 h-96 rounded-xl bg-custom-theme dark:bg-gray-100 dark:text-gray-800 dark:hover:text-gray-500 text-white">
                                <Image className="block mb-2 mx-auto object-fill h-56 w-full rounded-t-xl" width={96} height={96} src="https://upload.wikimedia.org/wikipedia/commons/f/f1/Stationary_Box.jpg" alt="" loading="lazy" />
                                <div className="flex gap-2 justify-between">
                                    <div className="w-24 h-4 ml-4 text-sm font-bold">Stationary</div>
                                    <div className="text-end w-24 h-6 mr-4 text-sm font-bold">₹ 3000</div>
                                </div>
                                <div className="mt-4 flex flex-col justify-between items-center gap-5">
                                    <QuantityButton />
                                    <button className="bg-custom-green hover:bg-hover-green text-white w-36 p-2 font-bold rounded-md">
                                        <div className="flex gap-4">
                                            <div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <circle cx="9" cy="21" r="1" />
                                                    <circle cx="20" cy="21" r="1" />
                                                    <path
                                                        d="M1 1h4l2.68 13.39a2 2 0 0 0 1.98 1.61h9.74a2 2 0 0 0 1.98-1.61L23 6H6"
                                                    />
                                                </svg>
                                            </div>
                                            <div>Purchase</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>


                        <div className="flex justify-center items-center">
                            <div className="flex flex-col w-60 h-96 rounded-xl bg-custom-theme dark:bg-gray-100 dark:text-gray-800 dark:hover:text-gray-500 text-white">
                                <Image className="block mb-2 mx-auto object-fill h-56 w-full rounded-t-xl" width={96} height={96} src="https://sharpi.in/wp-content/uploads/2022/06/1653353121_1708099.jpg" alt="" loading="lazy" />
                                <div className="flex gap-2 justify-between">
                                    <div className="w-24 h-4 ml-4 text-sm font-bold">Camera</div>
                                    <div className="text-end w-24 h-6 mr-4 text-sm font-bold">₹ 10,000</div>
                                </div>
                                <div className="mt-4 flex flex-col justify-between items-center gap-5">
                                    <QuantityButton />
                                    <button className="bg-custom-green hover:bg-hover-green text-white w-36 p-2 font-bold rounded-md">
                                        <div className="flex gap-4">
                                            <div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <circle cx="9" cy="21" r="1" />
                                                    <circle cx="20" cy="21" r="1" />
                                                    <path
                                                        d="M1 1h4l2.68 13.39a2 2 0 0 0 1.98 1.61h9.74a2 2 0 0 0 1.98-1.61L23 6H6"
                                                    />
                                                </svg>
                                            </div>
                                            <div>Purchase</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>


                        <div className="flex justify-center items-center">
                            <div className="flex flex-col w-60 h-96 rounded-xl bg-custom-theme dark:bg-gray-100 dark:text-gray-800 dark:hover:text-gray-500 text-white">
                                <Image className="block mb-2 mx-auto object-fill h-56 w-full rounded-t-xl" width={96} height={96} src="https://media.wired.com/photos/6511aab1189c419c40374c92/1:1/w_1358,h_1358,c_limit/Apple-Watch-Ultra-2-Alt-Gear.jpg" alt="" loading="lazy" />
                                <div className="flex gap-2 justify-between">
                                    <div className="w-24 h-4 ml-4 text-sm font-bold">Smart Watch</div>
                                    <div className="text-end w-24 h-6 mr-4 text-sm font-bold">₹ 9000</div>
                                </div>
                                <div className="mt-4 flex flex-col justify-between items-center gap-5">
                                    <QuantityButton />
                                    <button className="bg-custom-green hover:bg-hover-green text-white w-36 p-2 font-bold rounded-md">
                                        <div className="flex gap-4">
                                            <div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <circle cx="9" cy="21" r="1" />
                                                    <circle cx="20" cy="21" r="1" />
                                                    <path
                                                        d="M1 1h4l2.68 13.39a2 2 0 0 0 1.98 1.61h9.74a2 2 0 0 0 1.98-1.61L23 6H6"
                                                    />
                                                </svg>
                                            </div>
                                            <div>Purchase</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="flex flex-col w-60 h-96 rounded-xl bg-custom-theme dark:bg-gray-100 dark:text-gray-800 dark:hover:text-gray-500 text-white">
                                <Image className="block mb-2 mx-auto object-fill h-56 w-full rounded-t-xl" width={96} height={96} src="https://contents.mediadecathlon.com/p2153236/8ff54ab7687daad665741f08d7be5d37/p2153236.jpg?format=auto&quality=70&f=650x0" alt="" loading="lazy" />
                                <div className="flex gap-2 justify-between">
                                    <div className="w-24 h-4 ml-4 text-sm font-bold">Adidas Shoes</div>
                                    <div className="text-end w-24 h-6 mr-4 text-sm font-bold">₹ 4000</div>
                                </div>
                                <div className="mt-4 flex flex-col justify-between items-center gap-5">
                                    <QuantityButton />
                                    <button className="bg-custom-green hover:bg-hover-green text-white w-36 p-2 font-bold rounded-md">
                                        <div className="flex gap-4">
                                            <div>
                                                <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    width="24"
                                                    height="24"
                                                    viewBox="0 0 24 24"
                                                    fill="none"
                                                    stroke="currentColor"
                                                    strokeWidth="2"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                >
                                                    <circle cx="9" cy="21" r="1" />
                                                    <circle cx="20" cy="21" r="1" />
                                                    <path
                                                        d="M1 1h4l2.68 13.39a2 2 0 0 0 1.98 1.61h9.74a2 2 0 0 0 1.98-1.61L23 6H6"
                                                    />
                                                </svg>
                                            </div>
                                            <div>Purchase</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default Store

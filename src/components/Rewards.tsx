'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import ProductSelectionPopup from '@/components/ProductSelectionPopup'
import "@/styles/removescrollbelt.css"

type Props = {
    data : any
}

const Rewards = ({data}: Props) => {
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
                    <div className="flex justify-end ml-4 items-stretch">
                        <div className="p-4 invisible">Invisible Text to adjust Height</div>
                        <button className="block mr-4 my-auto bg-custom-theme hover:bg-hover-theme dark:bg-gray-100 dark:text-gray-800 dark:hover:bg-gray-500 text-white px-4 py-2 font-bold rounded-md">Add New Award</button>
                    </div>

                    {/* Badge Cards*/}
                    <div className="h-[600px] overflow-auto hide-scrollbar mt-12 rounded-3xl bg-gray-100 dark:bg-gray-600 mx-12 p-12 grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">

                    {data.map((item: any) => (
                        <div key={item.id} className="flex justify-center items-center">
                        <div className="flex flex-col w-56 h-56 rounded-3xl bg-custom-theme dark:bg-gray-100 dark:text-gray-800 dark:hover:text-gray-500 text-white">
                            <Image className="block mt-4 mb-2 mx-auto object-cover w-24 h-24 rounded-full" width={96} height={96} src={`data:image/jpeg;base64,${item.badge}`} alt="" loading="lazy" />
                            <div className="flex gap-2 justify-between">
                                <div className="w-24 h-4 ml-4 text-sm font-bold">{item.name}</div>
                                <div className="text-end w-24 h-12 mr-4 text-sm font-bold">{item.points}</div>
                            </div>
                            <div className="flex justify-center space-x-4 ">
                                <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 font-bold rounded-md" onClick={() => {
                                    setPopup(true);
                                }}>Nominate</button>
                            </div>
                        </div>
                    </div>
                    ))}

                        {/* <div className="flex justify-center items-center">
                            <div className="flex flex-col w-56 h-56 rounded-3xl bg-custom-theme dark:bg-gray-100 dark:text-gray-800 dark:hover:text-gray-500 text-white">
                                <Image className="block mt-4 mb-2 mx-auto object-cover w-24 h-24 rounded-full" width={96} height={96} src="https://png.pngtree.com/thumb_back/fh260/background/20230524/pngtree-modern-award-trophy-on-the-table-with-glowing-light-ilages-image_2609250.jpg" alt="" loading="lazy" />
                                <div className="flex gap-2 justify-between">
                                    <div className="w-24 h-4 ml-4 text-sm font-bold">{data[0].name}</div>
                                    <div className="text-end w-24 h-12 mr-4 text-sm font-bold">5000</div>
                                </div>
                                <div className="flex justify-center space-x-4 ">
                                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 font-bold rounded-md" onClick={() => {
                                        setPopup(true);
                                    }}>Nominate</button>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="flex flex-col w-56 h-56 rounded-3xl bg-custom-theme dark:bg-gray-100 dark:text-gray-800 dark:hover:text-gray-500 text-white">
                                <Image className="block mt-4 mb-2 mx-auto object-cover w-24 h-24 rounded-full" width={96} height={96} src="https://visualstudiomagazine.com/-/media/ECG/visualstudiomagazine/Images/IntroImages2018/trophy.jpeg" alt="" loading="lazy" />
                                <div className="flex gap-2 justify-between">
                                    <div className="w-24 h-4 ml-4 text-sm font-bold">Finale Award</div>
                                    <div className="text-end w-24 h-12 mr-4 text-sm font-bold">3000</div>
                                </div>
                                <div className="flex justify-center space-x-4 ">
                                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 font-bold rounded-md" onClick={() => {
                                        setPopup(true);
                                    }}>Nominate</button>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="flex flex-col w-56 h-56 rounded-3xl bg-custom-theme dark:bg-gray-100 dark:text-gray-800 dark:hover:text-gray-500 text-white">
                                <Image className="block mt-4 mb-2 mx-auto object-cover w-24 h-24 rounded-full" width={96} height={96} src="https://png.pngtree.com/thumb_back/fh260/background/20230524/pngtree-modern-award-trophy-on-the-table-with-glowing-light-ilages-image_2609250.jpg" alt="" loading="lazy" />
                                <div className="flex gap-2 justify-between">
                                    <div className="w-24 h-4 ml-4 text-sm font-bold">SPOT Award</div>
                                    <div className="text-end w-24 h-12 mr-4 text-sm font-bold">4000</div>
                                </div>
                                <div className="flex justify-center space-x-4 ">
                                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 font-bold rounded-md"  onClick={() => {
                                        setPopup(true);
                                    }}>Nominate</button>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="flex flex-col w-56 h-56 rounded-3xl bg-custom-theme dark:bg-gray-100 dark:text-gray-800 dark:hover:text-gray-500 text-white">
                                <Image className="block mt-4 mb-2 mx-auto object-cover w-24 h-24 rounded-full" width={96} height={96} src="https://png.pngtree.com/thumb_back/fh260/background/20230524/pngtree-modern-award-trophy-on-the-table-with-glowing-light-ilages-image_2609250.jpg" alt="" loading="lazy" />
                                <div className="flex gap-2 justify-between">
                                    <div className="w-24 h-4 ml-4 text-sm font-bold">SPOT Award</div>
                                    <div className="text-end w-24 h-12 mr-4 text-sm font-bold">4000</div>
                                </div>
                                <div className="flex justify-center space-x-4 ">
                                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 font-bold rounded-md" onClick={() => {
                                        setPopup(true);
                                    }}>Nominate</button>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="flex flex-col w-56 h-56 rounded-3xl bg-custom-theme dark:bg-gray-100 dark:text-gray-800 dark:hover:text-gray-500 text-white">
                                <Image className="block mt-4 mb-2 mx-auto object-cover w-24 h-24 rounded-full" width={96} height={96} src="https://www.ndmed.org/image/cache/awards.jpg" alt="" loading="lazy" />
                                <div className="flex gap-2 justify-between">
                                    <div className="w-24 h-4 ml-4 text-sm font-bold">Employee Award</div>
                                    <div className="text-end w-24 h-12 mr-4 text-sm font-bold">6000</div>
                                </div>
                                <div className="flex justify-center space-x-4 ">
                                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 font-bold rounded-md"  onClick={() => {
                                        setPopup(true);
                                    }}>Nominate</button>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="flex flex-col w-56 h-56 rounded-3xl bg-custom-theme dark:bg-gray-100 dark:text-gray-800 dark:hover:text-gray-500 text-white">
                                <Image className="block mt-4 mb-2 mx-auto object-cover w-24 h-24 rounded-full" width={96} height={96} src="https://png.pngtree.com/thumb_back/fh260/background/20230524/pngtree-modern-award-trophy-on-the-table-with-glowing-light-ilages-image_2609250.jpg" alt="" loading="lazy" />
                                <div className="flex gap-2 justify-between">
                                    <div className="w-24 h-4 ml-4 text-sm font-bold">Hackathon Award</div>
                                    <div className="text-end w-24 h-12 mr-4 text-sm font-bold">4000</div>
                                </div>
                                <div className="flex justify-center space-x-4 ">
                                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 font-bold rounded-md" onClick={() => {
                                        setPopup(true);
                                    }}>Nominate</button>
                                </div>
                            </div>
                        </div>
                        
                        <div className="flex justify-center items-center">
                            <div className="flex flex-col w-56 h-56 rounded-3xl bg-custom-theme dark:bg-gray-100 dark:text-gray-800 dark:hover:text-gray-500 text-white">
                                <Image className="block mt-4 mb-2 mx-auto object-cover w-24 h-24 rounded-full" width={96} height={96} src="https://png.pngtree.com/thumb_back/fh260/background/20230524/pngtree-modern-award-trophy-on-the-table-with-glowing-light-ilages-image_2609250.jpg" alt="" loading="lazy" />
                                <div className="flex gap-2 justify-between">
                                    <div className="w-24 h-4 ml-4 text-sm font-bold">Hackathon Award</div>
                                    <div className="text-end w-24 h-12 mr-4 text-sm font-bold">4000</div>
                                </div>
                                <div className="flex justify-center space-x-4 ">
                                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 font-bold rounded-md" onClick={() => {
                                        setPopup(true);
                                    }}>Nominate</button>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-center items-center">
                            <div className="flex flex-col w-56 h-56 rounded-3xl bg-custom-theme dark:bg-gray-100 dark:text-gray-800 dark:hover:text-gray-500 text-white">
                                <Image className="block mt-4 mb-2 mx-auto object-cover w-24 h-24 rounded-full" width={96} height={96} src="https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/about-us/awards/employee-happiness-awards-pic.jpg?h=404&iar=0&w=303&hash=AF2A57AF6F8B638CF6184B1C18225DE0" alt="" loading="lazy" />
                                <div className="flex gap-2 justify-between">
                                    <div className="w-24 h-4 ml-4 text-sm font-bold">Best Award</div>
                                    <div className="text-end w-24 h-12 mr-4 text-sm font-bold">5000</div>
                                </div>
                                <div className="flex justify-center space-x-4 ">
                                    <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 font-bold rounded-md" onClick={() => {
                                        setPopup(true);
                                    }}>Nominate</button>
                                </div>
                            </div>
                        </div> */}

                    </div>

                </div>
            </div>
        </>
    )
}

export default Rewards

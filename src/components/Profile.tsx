'use client'
import { UserSession } from '@/types/userSession';
import { useSession } from 'next-auth/react';
import '@/styles/darkmode.css'
import Image from 'next/image';
import React from 'react'
import "@/styles/removescrollbelt.css"

type Props = {}

const Profile = (props: Props) => {
    const session: UserSession | undefined = useSession().data?.user;
    return (
        <>
            <div className="min-h-[calc(100vh-56px)] h-full bg-gray-300 dark:bg-gray-700 ml-14 mt-14 mb-10 md:ml-64">

                <div className="bg-opacity-80 dark:bg-opacity-80 flex justify-around">
                    <div className="px-4 py-6 sm:px-6 lg:px-8 hidden lg:block md:block">
                        <Image className="flex-1 w-64 h-64 rounded-full shadow-lg" width={320} height={320} src={session?.picture!} alt="" />
                    </div>
                    <div className="px-4 py-6 sm:px-6 lg:px-8 mx-12 p-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <Image className="block w-32 h-32 rounded-full shadow-lg" width={128} height={128} src="https://png.pngtree.com/thumb_back/fh260/background/20230524/pngtree-modern-award-trophy-on-the-table-with-glowing-light-ilages-image_2609250.jpg" alt="" loading="lazy" />
                        <Image className="block w-32 h-32 rounded-full shadow-lg" width={128} height={128} src="https://visualstudiomagazine.com/-/media/ECG/visualstudiomagazine/Images/IntroImages2018/trophy.jpeg" alt="" loading="lazy" />
                        <Image className="block w-32 h-32 rounded-full shadow-lg" width={128} height={128} src="https://png.pngtree.com/thumb_back/fh260/background/20230524/pngtree-modern-award-trophy-on-the-table-with-glowing-light-ilages-image_2609250.jpg" alt="" loading="lazy" />
                        <Image className="block w-32 h-32 rounded-full shadow-lg" width={128} height={128} src="https://www.ndmed.org/image/cache/awards.jpg" alt="" loading="lazy" />
                        <Image className="block w-32 h-32 rounded-full shadow-lg" width={128} height={128} src="https://png.pngtree.com/thumb_back/fh260/background/20230524/pngtree-modern-award-trophy-on-the-table-with-glowing-light-ilages-image_2609250.jpg" alt="" loading="lazy" />
                        <Image className="block w-32 h-32 rounded-full shadow-lg" width={128} height={128} src="https://www.bankofbaroda.in/-/media/project/bob/countrywebsites/india/about-us/awards/employee-happiness-awards-pic.jpg?h=404&iar=0&w=303&hash=AF2A57AF6F8B638CF6184B1C18225DE0" alt="" loading="lazy" />
                    </div>

                </div>

                <div className="grid grid-cols-3 gap-12 mx-12">
                    <div className="grid grid-rows-3 gap-4 px-4 col-span-1 h-[450px]">

                        {/* identity-card */}
                        <div className="grid grid-rows-5 text-sm font-bold p-3 row-span-1 border-2 bg-custom-theme dark:bg-gray-100 dark:text-gray-700 text-white rounded-3xl">
                            <div className="flex justify-between">
                                <div className="">Name:</div>
                                <div className="">{session?.name}</div>
                            </div>
                            <div className="flex justify-between">
                                <div className="">Employee Id:</div>
                                <div className="">RZP1234</div>
                            </div>
                            <div className="flex justify-between">
                                <div className="">Email:</div>
                                <div className="">{session?.email}</div>
                            </div>
                            <div className="flex justify-between">
                                <div className="">Phone:</div>
                                <div className="">9896736363</div>
                            </div>
                            <div className="flex justify-between">
                                <div className="">Designation:</div>
                                <div className="">SDE-2</div>
                            </div>
                        </div>
                        {/* ./identity-card */}

                        {/* identity-card */}
                        <div className="text-sm font-bold p-3 row-span-1 border-2 bg-custom-theme dark:bg-gray-100 dark:text-gray-700 text-white rounded-3xl">
                            <div className="flex justify-center items-center h-full my-auto">
                                Hierarchy Tree
                            </div>
                        </div>
                        {/* ./identity-card */}

                        {/* identity-card */}
                        <div className="text-sm font-bold p-3 row-span-1 border-2 bg-custom-theme dark:bg-gray-100 dark:text-gray-700 text-white rounded-3xl">
                            <div className="flex justify-center items-center h-full my-auto">
                                Calender
                            </div>
                        </div>
                        {/* ./identity-card */}
                    </div>

                    <div className="col-span-2 h-[450px] border-2 bg-custom-theme rounded-3xl">
                        <div className="m-2 flex justify-center">
                            <div className="block my-auto bg-custom-green dark:bg-gray-100 dark:text-gray-800 text-white px-4 py-2 font-bold rounded-md">Total: 2100</div>
                        </div>
                        <div className="shadow-xs text-white text-sm">
                                <div className="grid grid-cols-4 gap-2 font-bold border-b p-2">
                                    <div className="col-span-1 flex justify-center">S.no</div>
                                    <div className="col-span-1 flex justify-center">Item</div>
                                    <div className="col-span-1 flex justify-center">Redemption</div>
                                    <div className="col-span-1 flex justify-center">Date</div>
                                </div>
                                <div className="h-[350px] hide-scrollbar overflow-auto">
                                <div className="font-sans">
                                    <div className="grid grid-cols-4 gap-2 font-bold p-2">
                                        <div className="col-span-1 flex justify-center">1.</div>
                                        <div className="col-span-1 flex justify-center">Camera</div>
                                        <div className="col-span-1 flex justify-center rounded-xl text-hover-red bg-white bg-opacity-50">- 1000</div>
                                        <div className="col-span-1 flex justify-center">24 Jan 2024</div>
                                    </div>
                                </div>
                                <div className="font-sans">
                                    <div className="grid grid-cols-4 gap-2 font-bold p-2">
                                        <div className="col-span-1 flex justify-center">2.</div>
                                        <div className="col-span-1 flex justify-center">Watch</div>
                                        <div className="col-span-1 flex justify-center rounded-xl text-hover-red bg-white bg-opacity-50">- 500</div>
                                        <div className="col-span-1 flex justify-center">23 Mar 2024</div>
                                    </div>
                                </div>
                                <div className="font-sans">
                                    <div className="grid grid-cols-4 gap-2 font-bold p-2">
                                        <div className="col-span-1 flex justify-center">3.</div>
                                        <div className="col-span-1 flex justify-center">Shoes</div>
                                        <div className="col-span-1 flex justify-center rounded-xl text-hover-red bg-white bg-opacity-50">- 3000</div>
                                        <div className="col-span-1 flex justify-center">29 Jul 2024</div>
                                    </div>
                                </div>
                                <div className="font-sans">
                                    <div className="grid grid-cols-4 gap-2 font-bold p-2">
                                        <div className="col-span-1 flex justify-center">4.</div>
                                        <div className="col-span-1 flex justify-center">Painting Colours</div>
                                        <div className="col-span-1 flex justify-center rounded-xl text-hover-red bg-white bg-opacity-50">- 200</div>
                                        <div className="col-span-1 flex justify-center">8 feb 2024</div>
                                    </div>
                                </div>
                                <div className="font-sans">
                                    <div className="grid grid-cols-4 gap-2 font-bold p-2">
                                        <div className="col-span-1 flex justify-center">5.</div>
                                        <div className="col-span-1 flex justify-center">Bracelet</div>
                                        <div className="col-span-1 flex justify-center rounded-xl text-hover-red bg-white bg-opacity-50">- 4000</div>
                                        <div className="col-span-1 flex justify-center">24 Apr 2024</div>
                                    </div>
                                </div>
                                <div className="font-sans">
                                    <div className="grid grid-cols-4 gap-2 font-bold p-2">
                                        <div className="col-span-1 flex justify-center">6.</div>
                                        <div className="col-span-1 flex justify-center">Camera</div>
                                        <div className="col-span-1 flex justify-center rounded-xl text-hover-red bg-white bg-opacity-50">- 1000</div>
                                        <div className="col-span-1 flex justify-center">24 Jan 2024</div>
                                    </div>
                                </div>
                                <div className="font-sans">
                                    <div className="grid grid-cols-4 gap-2 font-bold p-2">
                                        <div className="col-span-1 flex justify-center">7.</div>
                                        <div className="col-span-1 flex justify-center">Watch</div>
                                        <div className="col-span-1 flex justify-center rounded-xl text-hover-red bg-white bg-opacity-50">- 500</div>
                                        <div className="col-span-1 flex justify-center">23 Mar 2024</div>
                                    </div>
                                </div>
                                <div className="font-sans">
                                    <div className="grid grid-cols-4 gap-2 font-bold p-2">
                                        <div className="col-span-1 flex justify-center">8.</div>
                                        <div className="col-span-1 flex justify-center">Shoes</div>
                                        <div className="col-span-1 flex justify-center rounded-xl text-hover-red bg-white bg-opacity-50">- 3000</div>
                                        <div className="col-span-1 flex justify-center">29 Jul 2024</div>
                                    </div>
                                </div>
                                <div className="font-sans">
                                    <div className="grid grid-cols-4 gap-2 font-bold p-2">
                                        <div className="col-span-1 flex justify-center">9.</div>
                                        <div className="col-span-1 flex justify-center">Painting Colours</div>
                                        <div className="col-span-1 flex justify-center rounded-xl text-hover-red bg-white bg-opacity-50">- 200</div>
                                        <div className="col-span-1 flex justify-center">8 feb 2024</div>
                                    </div>
                                </div>
                                <div className="font-sans">
                                    <div className="grid grid-cols-4 gap-2 font-bold p-2">
                                        <div className="col-span-1 flex justify-center">10.</div>
                                        <div className="col-span-1 flex justify-center">Bracelet</div>
                                        <div className="col-span-1 flex justify-center rounded-xl text-hover-red bg-white bg-opacity-50">- 4000</div>
                                        <div className="col-span-1 flex justify-center">24 Apr 2024</div>
                                    </div>
                                </div>
                                <div className="font-sans">
                                    <div className="grid grid-cols-4 gap-2 font-bold p-2">
                                        <div className="col-span-1 flex justify-center">11.</div>
                                        <div className="col-span-1 flex justify-center">Camera</div>
                                        <div className="col-span-1 flex justify-center rounded-xl text-hover-red bg-white bg-opacity-50">- 1000</div>
                                        <div className="col-span-1 flex justify-center">24 Jan 2024</div>
                                    </div>
                                </div>
                                <div className="font-sans">
                                    <div className="grid grid-cols-4 gap-2 font-bold p-2">
                                        <div className="col-span-1 flex justify-center">12.</div>
                                        <div className="col-span-1 flex justify-center">Watch</div>
                                        <div className="col-span-1 flex justify-center rounded-xl text-hover-red bg-white bg-opacity-50">- 500</div>
                                        <div className="col-span-1 flex justify-center">23 Mar 2024</div>
                                    </div>
                                </div>
                                <div className="font-sans">
                                    <div className="grid grid-cols-4 gap-2 font-bold p-2">
                                        <div className="col-span-1 flex justify-center">13.</div>
                                        <div className="col-span-1 flex justify-center">Shoes</div>
                                        <div className="col-span-1 flex justify-center rounded-xl text-hover-red bg-white bg-opacity-50">- 3000</div>
                                        <div className="col-span-1 flex justify-center">29 Jul 2024</div>
                                    </div>
                                </div>
                                </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile
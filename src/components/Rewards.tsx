import React from 'react'

type Props = {}

const Rewards = (props: Props) => {
    return (
        <div className="h-full ml-14 mt-14 mb-10 md:ml-64">
            <div className="lg:pl-4 lg:flex lg:flex-col lg:w-75% mt-5 mx-2">
                {/* Main Container */}
                <div className="lg:flex gap-4 items-stretch">
                    {/* Large Box */}
                    <div className="md:p-2 p-6 rounded-lg bg-custom-theme dark:bg-gray-900 hover:bg-hover-theme dark:hover:bg-gray-600 align-middle border border-solid border-gray-200 dark:border-gray-500 mb-4 lg:mb-0 shadow-md lg:w-[35%]">
                        <div className="flex justify-center items-center space-x-5 h-full">
                            <div className="text-white">
                                <p>Current balance</p>
                                <h2 className="text-4xl font-bold">50.365</h2>
                                <p className="text-center">$25,365</p>
                            </div>
                        </div>
                    </div>

                    {/* White Box */}
                    <div className="bg-custom-theme dark:bg-gray-800 text-white p-4 rounded-lg xs:mb-4 max-w-full shadow-md lg:w-[65%]">
                        {/* Small Boxes */}
                        <div className="flex flex-wrap justify-between h-full">
                            {/* Small Box 1 */}
                            <div
                                className="cursor-pointer flex-1 bg-gradient-to-r bg-custom-theme dark:bg-gray-900  hover:bg-hover-theme dark:hover:bg-gray-600 rounded-lg flex flex-col items-center justify-center p-4 border border-gray-200 m-2">
                                <i className="fas fa-hand-holding-usd text-white text-4xl"></i>
                                <p className="text-white">To deposit</p>
                            </div>

                            {/* Small Box 2 */}
                            <div
                                className="cursor-pointer flex-1 bg-gradient-to-r bg-custom-theme dark:bg-gray-900 hover:bg-hover-theme dark:hover:bg-gray-600 rounded-lg flex flex-col items-center justify-center p-4 border border-gray-200 m-2">
                                <i className="fas fa-exchange-alt text-white text-4xl"></i>
                                <p className="text-white">Transfer</p>
                            </div>

                            {/* Small Box 3 */}
                            <div
                                className="cursor-pointer flex-1 bg-gradient-to-r bg-custom-theme dark:bg-gray-900 hover:bg-hover-theme dark:hover:bg-gray-600 rounded-lg flex flex-col items-center justify-center p-4 border border-gray-200 m-2">
                                <i className="fas fa-qrcode text-white text-4xl"></i>
                                <p className="text-white">Redeem</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Table */}
                <div className="rounded-lg p-4 shadow-md my-4 divide-y dark:divide-gray-700 dark:bg-gray-800 dark:text-gray-100 bg-white divide-gray-200">
                    <table className="table-auto w-full">
                        <thead>
                            <tr>
                                <th className="px-4 py-2 text-left border-b-2 w-full">
                                    <h2 className="text-ml font-bold text-gray-500 dark:text-gray-100">Transactions</h2>
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b w-full hover:bg-gray-100 dark:hover:bg-gray-900">
                                <td className="px-4 py-2 text-left align-top w-1/2">
                                    <div>
                                        <h2>Trade</h2>
                                        <p>07/24/2023</p>
                                    </div>
                                </td>
                                <td className="px-4 py-2 text-right text-hover-theme dark:hover:bg-gray-600 w-1/2">
                                    <p><span>$150</span></p>
                                </td>
                            </tr>
                            <tr className="border-b w-full hover:bg-gray-100 dark:hover:bg-gray-900">
                                <td className="px-4 py-2 text-left align-top w-1/2">
                                    <div>
                                        <h2>Trade</h2>
                                        <p>06/24/2023</p>
                                    </div>
                                </td>
                                <td className="px-4 py-2 text-right text-hover-theme dark:hover:bg-gray-600 w-1/2">
                                    <p><span>$15</span></p>
                                </td>
                            </tr>
                            <tr className="border-b w-full hover:bg-gray-100 dark:hover:bg-gray-900">
                                <td className="px-4 py-2 text-left align-top w-1/2 ">
                                    <div>
                                        <h2>Trade</h2>
                                        <p>02/05/2023</p>
                                    </div>
                                </td>
                                <td className="px-4 py-2 text-right text-hover-theme dark:hover:bg-gray-600 w-1/2">
                                    <p><span>$50</span></p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Rewards

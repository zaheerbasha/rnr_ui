'use client'
import { signOut } from 'next-auth/react';
import React from 'react'

type Props = {}

const Dashboard = (props: Props) => {
    return (
        <div className="px-8 grid grid-rows-8 gap-4 h-full">
            <div className="flex justify-between row-span-1">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-medium">Razorpay Rewards and Recognition</h1>
                </div>
                <div className="flex flex-between">
                    <div className="flex justify-between m-4 gap-4 my-auto">
                        <div className="bg-gray-400 rounded-full h-fit p-2">+M</div>
                        <div className="bg-gray-400 rounded-full h-fit p-2">-M</div>
                    </div>
                    <button className="h-fit block my-auto bg-custom-theme hover:bg-hover-theme rounded-md p-2 text-custom-buttonText" onClick={()=>{
                            signOut();
                    }}>Log out</button>
                </div>
            </div>
            <div className="row-span-2 border-2 border-custom-pink"></div>
            <div className="row-span-3 border-2 border-custom-orange"></div>
            <div className="row-span-2 border-2 border-custom-indigo"></div>
        </div>
    )
}

export default Dashboard
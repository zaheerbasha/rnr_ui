import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

type Props = {}

const AccessDenied = (props: Props) => {
    return (
        <div className="flex flex-col justify-center items-center h-[calc(100vh-70px)] bg-white">
            <div className="items-center flex flex-col">
                <div className="text-xl font-bold mt-[30px] text-center animate-bounce">
                    Access Denied
                </div>
                <div className="w-[218px] text-center mb-[45px] mt-[15px]">
                    {`For further assistance, contact the administrator`}
                </div>
                <Link
                    href={'/api/auth/signin?error=OAuthCallback'}
                    className={`md:w-[210px] w-[153px] h-[44px] md:h-[48px] border-solid border-[1px] hover:bg-hover-theme rounded-lg bg-custom-theme text-[#FFFFFF] flex justify-center items-center text-[14px] cursor-pointer ml-[11px] focus:bg-custom-yellow`}
                >Go Back</Link>
            </div>
        </div>
    )
}

export default AccessDenied
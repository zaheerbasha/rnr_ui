'use client'
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { ReactNode, useState } from "react";

interface Props {
    children: ReactNode
}

const LayoutComponent = (props: Props) => {
    const [dark, setDark] = useState(false);

    const setDarkMode = () => {
        setDark(!dark);
    }
    return (
        <main>
            <div className={dark ? "dark" : ""}>
                <div className="min-h-screen flex flex-col flex-auto flex-shrink-0 antialiased bg-white dark:bg-gray-700 text-black dark:text-white">
                    <Header darkMode={dark} setDarkMode={setDarkMode} />
                    <Sidebar />
                    {props.children}
                </div>
            </div>
        </main>
    )
}

export default LayoutComponent
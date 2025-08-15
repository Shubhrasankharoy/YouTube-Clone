import { AlignJustify, Search, Sun } from 'lucide-react'
import React from 'react'

export default function Header() {
    return (
        <header className='w-screen'>
            <div className='mx-auto p-2 px-3 flex'>
                <div className='w-40 flex items-center justify-center gap-2'>
                    <AlignJustify />
                    <img width={95} src='youTubeLogo.svg' alt="youtube" />
                </div>
                <div className='grow'>
                    <div className='overflow-hidden bg-[#222222] cursor-pointer pr-5 p-px rounded-full flex gap-5 justify-center items-center mx-auto w-xl'>
                        <input className='grow outline-0 rounded-l-full p-3 ps-7 bg-black' type="text" placeholder='Search' />
                        <div className=''>
                            <Search />
                        </div>
                    </div>
                </div>
                <div className='w-40 flex items-center justify-end gap-2'>
                    <div>
                        <Sun />
                    </div>
                    <img className='rounded-full w-10' src="https://ui-avatars.com/api/?name=John+Doe&background=ff0000&color=fff" alt="john" />
                </div>
            </div>
        </header>
    )
}

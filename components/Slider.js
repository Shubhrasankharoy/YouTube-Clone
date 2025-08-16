import React from 'react'
import { NAVBARITEMS } from '@/utils/constants'
import Link from 'next/link'
import { capitalizeFirstLetter } from '@/utils/functions'

export default function Slider({ className }) {
    return (
        <div className={`${className ?? ''} space-y-4 h-full custom-scrollbar overflow-auto pb-32`}>
            {NAVBARITEMS.map((section, index) => (
                <section key={index} className='mx-3 border-b border-gray-200 dark:border-gray-900 pb-4'>
                    {section.name && (
                        <h1 className='px-3 font-bold text-black/90 dark:text-gray-100'>{capitalizeFirstLetter(section.name)}</h1>
                    )}
                    <ul>
                        {section.items.map((item, index) => (
                            <li key={index}>
                                <Link className='flex gap-4 items-center rounded-lg hover:bg-gray-200/50 dark:hover:bg-gray-900 p-2 px-3' href={item.link}>
                                    {item.icon}
                                    <span className='font-medium dark:text-gray-300'>{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </section>
            ))}
        </div>
    )
}

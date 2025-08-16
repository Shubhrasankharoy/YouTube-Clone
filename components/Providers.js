'use client'
import store from '@/utils/redux/store'
import { ThemeProvider } from 'next-themes'
import React from 'react'
import { Provider } from 'react-redux'

export default function Providers({ children }) {
    return (
        <Provider store={store}>
            <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
                {children}
            </ThemeProvider>
        </Provider>
    )
}

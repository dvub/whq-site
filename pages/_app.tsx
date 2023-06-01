import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar'
import { Analytics } from '@vercel/analytics/react';
function MyApp({ Component, pageProps }: AppProps) {


    return (
        <>
            <Navbar />
            <Analytics/>
            <Component {...pageProps} ></Component>
        </>
    );
}

export default MyApp
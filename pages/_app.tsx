import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from '../components/navbar'
import { Analytics } from '@vercel/analytics/react';
import MusicNote from '@/components/musicnote';
function MyApp({ Component, pageProps }: AppProps) {


    return (
        <>
            <Navbar />
            <Analytics />
            <Component {...pageProps} ></Component>
            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <MusicNote />
            </div>
        </>
    );
}

export default MyApp
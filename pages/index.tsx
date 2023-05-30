import Link from "next/link";
import MusicNote from '../components/musicnote'
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div>
      <h1 style={{ marginTop: '10vh' }}>Waking Hours</h1>
      <div>
        <p style={{ maxWidth: '50vw', textAlign: 'center', margin: 'auto', marginTop: '10vh' }}>
          We&apos;re the Waking Hours Quintet. We play jazz in Reno, NV. Actually, we play a lot of genres. We just like making cool sounds. If you want to learn more about us, go <Link href={'/about'}>here</Link>.
        </p>
      </div>
      <div style={{margin: 'auto', width: '100%', textAlign:'center'}}><MusicNote/></div>
    </div>
  )
}

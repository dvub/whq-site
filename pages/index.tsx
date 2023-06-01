import Link from "next/link";
import MusicNote from "../components/musicnote";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div>
      <h1>Waking Hours</h1>
      <div>
        <p>
          We&apos;re the <b>Waking Hours Quintet.</b><br/>
          We play <b>jazz</b> in Reno, NV. Actually, we play a lot of
          genres. We just like making <b>cool sounds</b>.<br/>If you want to learn
          more about us, go&nbsp;
          <Link href={"/about"}>
            <u>here</u>
          </Link>
          .
        </p>
      </div>
      <div
        style={{
          display: "flex",
          marginTop: "5vh",
          marginBottom: "5vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MusicNote />
      </div>
    </div>
  );
}

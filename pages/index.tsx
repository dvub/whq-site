import Link from "next/link";
import MusicNote from "../components/musicnote";
import { useEffect, useState } from "react";

export default function Home() {
  return (
    <div>
      <h1 style={{ marginTop: "10vh" }}>Waking Hours</h1>
      <div className="gradient">
        <p
          style={{
            maxWidth: "50vw",
            textAlign: "left",
            margin: "auto",
            marginTop: "10vh",
          }}
        >
          We&apos;re the <b>Waking Hours Quintet.</b>
          &nbsp;We play jazz in <b>Reno, NV</b>. Actually, we play a lot of
          genres. We just like making <b>cool sounds</b>. If you want to learn
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
          marginTop: "10vh",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MusicNote />
      </div>
    </div>
  );
}

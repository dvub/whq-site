import Link from "next/link";
import Image from 'next/image'
import Head from "next/head";

export default function Home() {
  const title = "Waking Hours";
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",

        }}
      >
        <div style={{ width: '25rem', height: '25rem', position: 'relative' }}>
          <Image alt="logo" src="/logo_text.png" fill quality={100} />
        </div>

      </div>
      <div>
        <p>
          We&apos;re the <b>Waking Hours Quintet.</b><br />
          We play <b>jazz</b> in Reno, NV. Actually, we play a lot of
          genres. We just like making <b>cool sounds</b>.<br />If you want to learn
          more about us, go&nbsp;
          <Link href={"/about"}>
            <u>here</u>
          </Link>
          .
        </p>

      </div>

    </div>
  );
}

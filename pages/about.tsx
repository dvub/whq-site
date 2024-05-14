import Head from "next/head";

export default function About() {
  const title = "About Us";
  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>
      <h1>{title}</h1>
      <div>
        <p>
          The Waking Hours Quintet is comprised of <b>five players</b>:
        </p>
        <ul>
          <li>&gt; Jake Xie - Saxophone</li>
          <li>&gt; Teagan Loranz - Guitar</li>
          <li>&gt; Evan Reese - Bass</li>
          <li>&gt; Jackson Strawn - Drums</li>
          <li>&gt; Kaya E. - Piano</li>
        </ul>
        <p>
          We&apos;ve been playing music together for years, whether it be in
          school bands or other groups. As a combo, we&apos;ve played together
          for about a year. <b>Music has always been a passion</b> for us, and
          we wanted to get together and share our passion with others.
        </p>
      </div>
    </div>
  );
}

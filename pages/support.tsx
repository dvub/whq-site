import Head from "next/head";
import Link from "next/link";

export default function Support() {
    const title = "Support Us";
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <h1>{title}</h1>
            <p>
                We&apos;re a small, local group of musicians -- in other words, we don&apos;t have a lot of money. <b>We need your support in order to do what we love</b>, which is music! ...Oh, and to eat and stuff...
                <br />
                <br />
                The best way for you to support us is to buy <b>tickets for shows, follow us on our socials, and to spread the word!</b>
                <br />
                Of course, we always accept donations here: <b>Venmo: @jaketheduque</b>
                <br />
                <br />
                If you&apos;re interested in sponsoring us, please reach out to one of our emails on the <Link href={'./contact'}><u>contact page</u></Link>.
                Thanks for your support!
            </p>
        </div>
    )
}
import Head from 'next/head';
import Email from '../components/email';
export default function Contact() {
    const title = "Contact Us";
    return (
        <div>
            <Head>
                <title>{title}</title>
            </Head>
            <h1>{title}</h1>
            <p>
                If you&apos;re interested in hiring us for an event, <b>please reach out to this email</b>.
                <br />
                <br />
                &gt;{" "}<Email email="contact"></Email>

            </p>
            <p>
                If you would like to <b>contact one of us individually</b>, you can use these emails:
            </p>
            <ul>
                <li>
                    &gt;{" "}<Email email="jake"></Email>
                </li>
                <li>
                    &gt;{" "}<Email email="kaya"></Email>
                </li>
                <li>
                    &gt;{" "}<Email email="evan"></Email>
                </li>
                <li>
                    &gt;{" "}<Email email="jackson"></Email>
                </li>
                <li>
                    &gt;{" "}<Email email="teagan"></Email>
                </li>
            </ul>
            <p>
                (Please don&apos;t spam any of our emails, thx :D)
            </p>
        </div>
    )
}
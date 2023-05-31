import Link from "next/link";

export default function Work() {
  return (
    <div>
      <h1>Our Work</h1>
        <p>
          We play locally in <b>Reno, NV.</b> We play at various events and
          locations; Most of the time we&apos;re super flexible and <b>we love to play anywhere we can!</b>
          <br />
          <br />
          You can find recordings of our gigs and sessions on our social media:
          </p>
          <ul>
            <li>
              &gt;{" "}
              <a href="https://www.youtube.com/@wakinghoursquintet">
                YouTube{" "}
                
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                  />
                </svg>
              </a>
            </li>
          </ul>
          <p>

          If you&apos;re interested in hiring us for one of <b><i>your</i> events</b>,
          you can contact us{" "}
          <Link href={"/contact"}>
            <u>here</u>
          </Link>
          .
        </p>
    </div>
  );
}

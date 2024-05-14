export default function Email(props: {email: string}) {
    return (
        <a href={`mailto: ${props.email}@wakinghoursquintet.com`}>
            <b>{props.email}</b>@wakinghoursquintet.com
        </a>
    )
}
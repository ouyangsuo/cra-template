import { Link } from 'react-router-dom'

function MyLink(props) {
    if (!props.to.startsWith("http")) {
        return <Link {...props}>{props.children}</Link>
    } else {
        return <a {...props} href={props.to}>{props.children}</a>
    }
}

export default MyLink
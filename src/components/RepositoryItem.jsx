import { permittedCrossDomainPolicies } from "helmet";

export function RepostoryItem(props) {
    return (
        <li>
            <strong>
                {props.repository?.name}
            </strong>
            <p>{props.repository?.description}</p>
            <a href={props.repository?.html_url ?? 'https//github.com/unform/unform'}>
                Acessar repositório
            </a>
        </li>
    )
}
import { permittedCrossDomainPolicies } from "helmet";

export function RepostoryItem(props) {
    return (
        <li>
            <strong>
                {props.repository?.name ?? 'Default'}
            </strong>
            <p>{props.repository?.description ?? 'Forms in Reacttt'}</p>
            <a href={props.repository?.link ?? 'https//github.com/unform/unform'}>
                Acessar repositório
            </a>
        </li>
    )
}
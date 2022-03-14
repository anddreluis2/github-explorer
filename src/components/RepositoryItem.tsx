import { permittedCrossDomainPolicies } from "helmet";

interface RepositoryItemProps {
    repository: {
        name: string,
        description: string,
        html_url: string,
    }
}

export function RepostoryItem(props: RepositoryItemProps) {
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
import { RepostoryItem } from "./RepositoryItem";

const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https//github.com/unform/unform'
}

export function RepositoryList() {
    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                <RepostoryItem repository={repository} />
                <RepostoryItem />
                <RepostoryItem />
                <RepostoryItem />
            </ul>
        </section>
    )
}
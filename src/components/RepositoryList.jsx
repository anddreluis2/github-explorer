import { RepostoryItem } from "./RepositoryItem";
import '../styles/repositories.scss'
import { useEffect, useState } from 'react'


const repository = {
    name: 'unform',
    description: 'Forms in React',
    link: 'https//github.com/unform/unform'
}

export function RepositoryList() {

    const [repositories, setRepositories] = useState([]);

    useEffect(() => {
        fetch('https://api.github.com/orgs/rocketseat/repos')
        .then(response => response.json())
        .then(data => setRepositories(data))
    }, []);

    return (
        <section className="repository-list">
            <h1>Lista de Repositórios</h1>
            <ul>
                <RepostoryItem repository={repository} />
                <RepostoryItem repository={repository} />
                <RepostoryItem repository={repository} />
                <RepostoryItem repository={repository} />
            </ul>
        </section>
    )
}
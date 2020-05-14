import React from "react";

import { Container, Repository } from "./style";

export default function Card({ repositories, removeRepository }) {
  return (
    <Container>
      {repositories.map(repository => (
        <Repository key={repository.id}>
          <header>
            <p style={{ marginLeft: '225px', color: 'red', fontWeight: 'bold' }} onClick={(e) => { removeRepository(e.target.id) }} id={repository.id}>X</p>
            <img
              src={repository.owner.avatar_url}
              alt={repository.owner.login}
            ></img>
            <strong>{repository.name}</strong>
            <small>{repository.owner.login}</small>
          </header>

          <ul>
            <li>
              {repository.stargazers_count} <small>stars</small>
            </li>
            <li>
              {repository.forks_count} <small>forks</small>
            </li>
            <li>
              {repository.open_issues_count} <small>issues</small>
            </li>
            <li>
              {repository.lastCommit} <small>last commit</small>
            </li>
          </ul>
        </Repository>
      ))}
    </Container>
  );
}

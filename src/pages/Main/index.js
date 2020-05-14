import React, { useState } from "react";
import moment from "moment";
import api from "../../services/api";

import Card from "../../components/Card/index";

import logo from "../../assets/logo.png";

import { Container, ContainerForm, Form } from "./style";

export default function FormSearch() {
  const [inputRepo, setInputRepo] = useState("");
  const [repos, setRepo] = useState([]);

  async function addRepository(e) {
    e.preventDefault();

    const { data: repository } = await api.get(`repos/${inputRepo}`);

    repository.lastCommit = moment(repository.pushed_at).fromNow();

    setInputRepo("");
    setRepo([...repos, repository]);
  }

  return (
    <Container>
      <ContainerForm>
        <img src={logo} width="80%" alt="logo" />
        <Form onSubmit={addRepository}>
          <input
            type="text"
            placeholder="user/repository"
            value={inputRepo}
            onChange={e => setInputRepo(e.target.value)}
          />
          <button type="submit">+</button>
        </Form>
      </ContainerForm>
      <Card repositories={repos} />
    </Container>
  );
}

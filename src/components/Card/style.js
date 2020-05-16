import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  color: #304C89;
  cursor: pointer;
`;

export const Repository = styled.div`
  width: 250px;
  height: 325px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  margin: 20px 10px 20px 30px;
  box-shadow: -3px 2px 15px 2px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: 0.4s ease-out;
  &:hover {
    transform: translateY(-10px);
    transition: 0.4s ease-out;
  }
  header {
    margin: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;
    img {
      width: 64px;
      border-radius: 50%;
    }
    strong {
      font-size: 24px;
      margin-top: 10px;
    }
    small {
      font-size: 14px;
      color: #fff;
    }
  }
  ul {
    list-style: none;

    li {
      font-weight: bold;
      padding: 12px 20px;
      color: #555;
      &:nth-child(2n - 1) {
        background-color: #10101010;
      }
    }
    small {
      font-weight: normal;
      font-size: 12px;
      color: #555;
      font-style: italic;
    }
  }
`;

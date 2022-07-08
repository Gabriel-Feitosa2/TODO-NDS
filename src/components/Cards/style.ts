import styled from 'styled-components';

export const CardStyle = styled.div`
  .card {
    width: 18rem;
    border-radius: 15px;
    box-shadow: rgb(0 0 0 / 24%) 0px 3px 8px;
  }
  .card-body {
    height: 8rem;
  }
  .card-title {
    font-size: 16px;
    font-family: 'Karla', sans-serif;
    color: red;
  }
  .card-subtitle {
    font-size: 16px;
    font-family: 'Karla', sans-serif;
    font-weight: bold;
    color: #333333;
  }
  .card-text {
    font-size: 10px;
    color: #333333;
  }
  .footer {
    display: flex;
    padding-top: 10px;
    padding-right: 25px;
    align-items: center;
    justify-content: space-between;
    font-size: 13px;
  }
  .tarefas {
    display: flex;
    align-items: center;
  }
  .data {
    display: flex;
    align-items: center;
  }

  .tarefas-icons {
    width: 20px;
    height: 20px;
  }

  .barra {
    position: absolute;
    background-color: red;
    width: 2px;
    height: 35px;
    border-radius: 5px;
  }
  .body {
    display: flex;
    justify-content: space-between;
  }

  .body-text {
    position: relative;
    top: 5px;
    margin-left: 12px;
    flex-direction: row;
  }
`;

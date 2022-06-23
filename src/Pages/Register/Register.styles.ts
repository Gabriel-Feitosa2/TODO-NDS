import styled from 'styled-components';

export const RegisterStyles = styled.div`
  background-color: #202342;
  height: 70px;
  .conta {
    color: #27c498;
    text-decoration: none;
    font-family: Poppins;
    font-size: 12px;
    font-weight: 600;
    display: flex;
    width: 150px;
    margin-left: 82vw;
  }
  h2 {
    font-size: 25px;
    position: relative;
    top: 13px;
    font-family: 'Poppins', sans-serif;
    color: white;
    display: flex;
    align-items: baseline;
  }
  strong {
    color: #198754;
  }
  @media only screen and (max-width: 600px) {
    background-color: #25294c;
    .conta {
      position: absolute;
      top: 43rem;
      right: 10rem;
    }
    h2 {
      position: relative;
      top: 10rem;
      left: 12rem;
    }
  }
`;

export const RegisterContainer = styled.div`
  Form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 15rem;
    font-family: 'Poppins', sans-serif;
  }

  .label {
    color: white;
  }

  .input {
    width: 316px;
    height: 38px;
    border: solid 1px gray;
    border-radius: 5px;
    background-color: #25294c;
    margin-bottom: 15px;
    color: white;
  }

  h1 {
    position: relative;
    color: white;
    font-family: 'Poppins', sans-serif;
    right: 115px;
  }

  Button {
    width: 316px;
    height: 42px;
    background-color: #27c498;
    border-radius: 5px;
    color: white;
    font-family: Poppins;
    font-size: 16px;
    font-weight: 700;
    border: 0px;
  }
`;

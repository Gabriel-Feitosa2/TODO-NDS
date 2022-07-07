import styled from 'styled-components';

export const HeaderStyle = styled.div`
  height: 0px;
  .header {
    font-family: 'Poppins', sans-serif;
    position: fixed;
    left: 10rem;
    top: 2rem;
    display: flex;
  }
  h1 {
    color: #202342;
    font-size: 20px;
  }
  .texto {
    display: flex;
    flex-direction: column;
    margin-left: 1rem;
  }

  button {
    color: white;
    background-color: #202342;
    border-radius: 5px;
    position: absolute;
    left: 80vw;
    width: 100px;
    height: 37px;
    border: 0px;
    cursor: pointer;
  }
  .icon {
    width: 48px;
    height: 48px;
    padding: 10px 10px 10px 10px;
    background-color: white;
    border-radius: 10px;
  }
`;

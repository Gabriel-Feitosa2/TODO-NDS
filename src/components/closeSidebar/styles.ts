import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  width: 6rem;
  height: 100px;
  padding-bottom: 100vh;
  background-color: #1a202c;
  > svg {
    position: fixed;
    color: white;
    width: 30px;
    height: 30px;
    margin-top: 32px;
    margin-left: 32px;
    cursor: pointer;
  }
  .logoutt {
    position: relative;
    top: 90vh;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

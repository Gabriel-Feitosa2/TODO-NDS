import styled from 'styled-components';

export const SidebarStyle = styled.div`
  position: fixed;
  vertical-align: baseline;
  background-color: #25294c;
  color: #e9ecef;
  font-family: 'Poppins', sans-serif;
  width: 250px;
  height: 100vh;
  animation: showSidebar 0.4s;

  .margem {
    margin-left: 1rem;
    padding-top: 1rem;
  }

  .TODO {
    display: flex;
    align-items: center;
  }

  .barra-todo {
    margin-left: 6.5rem;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
  .tarefas {
    margin-top: 5px;
    display: flex;
    align-items: center;
    font-size: 18px;
  }

  #active {
    background-color: white;
    border-radius: 4px;
    color: #25294c;
    .tarefas-texto {
      color: #25294c;
    }
  }

  .tarefas-texto {
    margin-left: 0.3rem;
    color: #e9ecef;
  }
  .tarefas-icons {
    width: 24px;
    height: 24px;
  }
  .lista {
    margin-top: 5px;
    display: flex;
    align-items: center;
    font-size: 18px;
  }
  .lista-icons {
    width: 24px;
    height: 24px;
  }
  .lista-texto {
    margin-left: 0.3rem;
  }
  .user {
    background-color: #202342;
    margin-top: 37rem;
    padding-bottom: 10px;
    padding-left: 1rem;
  }
  .aliamento {
    margin-bottom: 45px;
    padding-top: 10px;
    display: flex;
    align-items: center;
  }
  .user-icon {
    width: 30px;
    height: 30px;
  }
  .usuario {
    position: relative;
    bottom: 2.8rem;
    left: 2rem;
    font-size: 12px;
    color: #e9ecef;
  }
  .logout {
    position: relative;
    left: 10rem;
    bottom: 5.5rem;
    width: 30px;
    height: 30px;
    cursor: pointer;
  }

  @keyframes showSidebar {
    from {
      opacity: 0;
      width: 0;
    }
    to {
      opacity: 1;
      width: 300px;
    }
  }
`;

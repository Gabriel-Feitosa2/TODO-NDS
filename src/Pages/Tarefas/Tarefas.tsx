import { useNavigate } from 'react-router-dom';
import { LocalStorage } from '../../contexts/jwt/local-storage';

const Tarefas = () => {
  const conta = localStorage.getItem('user');
  const navigate = useNavigate();

  async function logout() {
    LocalStorage.remove({ key: 'user' });
    navigate('/');
  }

  return (
    <>
      <h1>Teste</h1>
      <button type="button" onClick={logout}>
        Sair
      </button>
      <h3>
        <strong>{conta}</strong>
      </h3>
    </>
  );
};

export default Tarefas;

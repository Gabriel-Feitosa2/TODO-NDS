import { useNavigate, Link, useLocation } from 'react-router-dom';
import Todo from '../../assets/TODO.png';
import { BiUserCircle, BiLogOut } from 'react-icons/bi';
import { FaBars } from 'react-icons/fa';
import { GoInbox } from 'react-icons/go';
import { AiOutlineBars } from 'react-icons/ai';
import { LocalStorage } from '../../contexts/jwt/local-storage';
import SidebarGlobalStyle from '../../styles/SidebarGlobalStyle';
import { SidebarStyle } from './styles';

// eslint-disable-next-line react/prop-types
const Sidebar = ({ active }) => {
  const location = useLocation();
  const closeSidebar = () => {
    active(false);
  };

  const navigate = useNavigate();

  async function logout() {
    LocalStorage.remove({ key: 'user' });
    navigate('/');
  }

  return (
    <SidebarStyle>
      <SidebarGlobalStyle />
      <div className="margem">
        <div className="TODO">
          <img src={Todo} alt="logo" width="82" height="32" />
          <FaBars onClick={closeSidebar} className="barra-todo" />
        </div>
        <div
          id={location.pathname == '/tarefas' ? 'active' : ''}
          className="tarefas"
        >
          <GoInbox className="tarefas-icons" />
          <Link to="/tarefas">
            <h1 className="tarefas-texto">Tarefas</h1>
          </Link>
        </div>
        <div
          id={location.pathname == '/listas' ? 'active' : ''}
          className="lista"
        >
          <AiOutlineBars className="lista-icons" />
          <Link to="/listas">
            <h1 className="tarefas-texto">Lista</h1>
          </Link>
        </div>
      </div>
      <div className="user ">
        <div className="aliamento">
          <BiUserCircle className="user-icon" />
          <h3>
            <strong>Gabriel Feitosa</strong>
          </h3>
        </div>
        <p className="usuario">Usuário</p>
        <BiLogOut className="logout" onClick={logout} />
      </div>
    </SidebarStyle>
  );
};

export default Sidebar;

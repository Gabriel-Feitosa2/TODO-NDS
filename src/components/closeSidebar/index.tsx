import React, { useState } from 'react';
import { Container } from './styles';
import { FaBars } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import Sidebar from '../sidebar/sidebar';
import SidebarGlobalStyle from '../../styles/SidebarGlobalStyle';
import { useNavigate } from 'react-router-dom';
import { LocalStorage } from '../../contexts/jwt/local-storage';

const CloseSidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSiderbar = () => setSidebar(!sidebar);

  const navigate = useNavigate();

  async function logout() {
    LocalStorage.remove({ key: 'user' });
    navigate('/');
  }

  return (
    <Container>
      <SidebarGlobalStyle />
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
      <BiLogOut className="logoutt" onClick={logout} />
    </Container>
  );
};

export default CloseSidebar;

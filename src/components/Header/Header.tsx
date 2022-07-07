import { HeaderStyle } from './styles';
import { CgInbox } from 'react-icons/cg';
import { useState } from 'react';
import React from 'react';
import ModalCadastro from './Modal/Modal';

const Header = () => {
  const [modalShow, setModalShow] = React.useState(false);
  return (
    <>
      <HeaderStyle>
        <div className="header">
          <CgInbox className="icon" />
          <div className="texto">
            <h1>Tarefas</h1>
            <p>Página de gerenciamento das tarefas</p>
          </div>
          <button type="button" onClick={() => setModalShow(true)}>
            Novo
          </button>
          <ModalCadastro show={modalShow} onHide={() => setModalShow(false)} />
        </div>
      </HeaderStyle>
    </>
  );
};
export default Header;

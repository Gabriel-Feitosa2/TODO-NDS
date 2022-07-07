/* eslint-disable react/prop-types */
import Modal from 'react-bootstrap/Modal';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import ModalTitle from 'react-bootstrap/ModalTitle';
import Button from 'react-bootstrap/Button';
import { BsPlusLg } from 'react-icons/bs';
import FormModal from './FormModal/FormModal';

function ModalCadastro(props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <ModalHeader closeButton>
        <ModalTitle id="contained-modal-title-vcenter">
          <BsPlusLg /> Cadastro de Tarefas
        </ModalTitle>
      </ModalHeader>
      <ModalBody>
        <FormModal />
      </ModalBody>
      <ModalFooter>
        <Button variant="danger" onClick={props.onHide}>
          Fechar
        </Button>
        <Button variant="success">Salvar</Button>
      </ModalFooter>
    </Modal>
  );
}

export default ModalCadastro;

import { Col, Row } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import { FormModalStyle } from './styles';

const FormModal = () => {
  return (
    <FormModalStyle>
      <Form>
        <Row>
          <Col>
            <h2>Nome</h2>
            <Form.Control placeholder="Digite o nome da tarefa" />
          </Col>
          <Col>
            <h2>Lista</h2>
            <Form.Select aria-label="Default select example">
              <option>Open this select menu</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
        </Row>
        <h2>Data de conclusão</h2>
        <Form.Control placeholder="Escolha a data de entregas da tarefa" />
        <Form.Label>Descrição</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Escreva uma breve descrição sobre a tarefa"
        />
      </Form>
    </FormModalStyle>
  );
};

export default FormModal;

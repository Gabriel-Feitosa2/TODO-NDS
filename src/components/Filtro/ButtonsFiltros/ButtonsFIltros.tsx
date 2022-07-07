import Dropdown from 'react-bootstrap/Dropdown';
import { ButtonsFiltrosStyle } from './styles';

const ButtonsFiltros = () => {
  return (
    <ButtonsFiltrosStyle>
      <Dropdown>
        <p>Lista</p>
        <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
          Selecione aqui
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <p>Data de conclusão</p>
        <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
          Selecione aqui
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
      <Dropdown>
        <p>Ordenar por</p>
        <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
          Selecione aqui
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </ButtonsFiltrosStyle>
  );
};

export default ButtonsFiltros;

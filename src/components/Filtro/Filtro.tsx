import { Accordion } from 'react-bootstrap';
import ButtonsFiltros from './ButtonsFiltros/ButtonsFIltros';
import { FiltroStyles } from './styles';

const Filtro = () => {
  return (
    <FiltroStyles>
      <Accordion className="Accordion">
        <Accordion.Item eventKey="0">
          <Accordion.Header>Filtros</Accordion.Header>
          <Accordion.Body>
            <ButtonsFiltros />{' '}
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </FiltroStyles>
  );
};

export default Filtro;

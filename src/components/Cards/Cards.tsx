import Card from 'react-bootstrap/Card';
import { CardStyle } from './style';
import { MdToc } from 'react-icons/md';
import { BsClock } from 'react-icons/bs';
import LongMenu from './Options/Options';

const Cards = () => {
  return (
    <CardStyle>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Em atraso</Card.Title>
          <div className="body">
            <div className="body-text">
              <Card.Subtitle className="card-subtitle">
                Título da Task
              </Card.Subtitle>
              <Card.Text>Descrição da tarefa</Card.Text>
            </div>
            <LongMenu />
            <div className="barra"></div>
          </div>
          <div className="footer">
            <div className="tarefas">
              <MdToc className="tarefas-icons" /> <p>Tarefas</p>
            </div>
            <div className="data">
              <BsClock /> <p>24 de Outubro, 10:15</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </CardStyle>
  );
};

export default Cards;

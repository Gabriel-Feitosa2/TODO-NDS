/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import { CardStyle } from './style';
import { MdToc } from 'react-icons/md';
import { BsClock } from 'react-icons/bs';
import LongMenu from './Options/Options';

const Cards = ({ card }) => {
  return (
    <CardStyle>
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Card.Title>Em atraso</Card.Title>
          <div className="body">
            <div className="body-text">
              <Card.Subtitle className="card-subtitle">
                {card.name}
              </Card.Subtitle>
              <Card.Text>{card.descricao}</Card.Text>
            </div>
            <LongMenu />
            <div className="barra"></div>
          </div>
          <div className="footer">
            <div className="tarefas">
              <MdToc className="tarefas-icons" /> <p>Tarefas</p>
            </div>
            <div className="data">
              <BsClock /> <p>{card.date}</p>
            </div>
          </div>
        </Card.Body>
      </Card>
    </CardStyle>
  );
};

export default Cards;

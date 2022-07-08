/* eslint-disable @typescript-eslint/no-shadow */
import { useState } from 'react';
import Cards from '../Cards/Cards';
import { CardListStyle } from './styles';

const CardList = () => {
  const [card, setCard] = useState([
    {
      id: 1,
      name: 'Estudar',
      date: '24 de Outrbro 10:19',
      descricao: 'Estudar progamação',
    },
    {
      id: 2,
      name: 'Estudar',
      date: '24 de Outrbro 10:18',
      descricao: 'Estudar Historia',
    },
    {
      id: 3,
      name: 'Estudar',
      date: '24 de Outrbro 10:16 ',
      descricao: 'Estudar Biologia',
    },
  ]);
  return (
    <CardListStyle>
      <div className="cardlist">
        {card.map((card) => (
          // eslint-disable-next-line react/jsx-key
          <tr key={card.id}>
            <Cards card={card} />
          </tr>
        ))}
      </div>
    </CardListStyle>
  );
};

export default CardList;

import CardList from '../../components/CardList/CardList';
import CloseSidebar from '../../components/closeSidebar';
import Filtro from '../../components/Filtro/Filtro';
import Header from '../../components/Header/Header';
import { TarefaDashBoard, TarefasStyles } from './Tarefas.styles';

const Tarefas = () => {
  return (
    <>
      <TarefaDashBoard className="teste">
        <Header />
        <Filtro />
        <CardList />
        <TarefasStyles />
      </TarefaDashBoard>
      <CloseSidebar />
    </>
  );
};

export default Tarefas;

import Cards from '../../components/Cards/Cards';
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
        <Cards />
        <TarefasStyles />
      </TarefaDashBoard>
      <CloseSidebar />
    </>
  );
};

export default Tarefas;

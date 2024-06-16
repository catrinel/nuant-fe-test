import { usePokeContext } from "./PokeContext/PokeContext";
import PokeItemDetail from "./PokeItemDetail/PokeItemDetails";
import PokeList from "./PokeList/PokeList";

const PokeManager: React.FC = () => {
  const { state } = usePokeContext();
  return state.showDetails ? <PokeItemDetail /> : <PokeList />;
};

export default PokeManager;

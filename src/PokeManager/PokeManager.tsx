import PokeProvider from "./PokeContext/PokeProvider";
import PokeList from "./PokeList/PokeList";

const PokeManager: React.FC = () => {
  return (
    <PokeProvider>
      <PokeList />
    </PokeProvider>
  );
};

export default PokeManager;

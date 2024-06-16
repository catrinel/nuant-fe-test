import Avatar from "../../common/Avatar/Avatar";
import { usePokeContext } from "../PokeContext/PokeContext";
import { IPokeItemProps } from "./PokeItem.interface";

const PokeItem: React.FC<IPokeItemProps> = ({ pokemon }) => {
  const { setSelectedPokemon, setShowDetails } = usePokeContext();

  const handleSelectPokemon = () => {
    setSelectedPokemon(pokemon);
    setShowDetails(true);
  };

  return (
    <div className="flex min-w-0 gap-x-4" onClick={handleSelectPokemon}>
      <Avatar src={pokemon.imageUrl} alt={pokemon.name} withBorder />

      <div className="min-w-0 flex-auto content-center">
        <p className="text-sm font-semibold leading-6 text-gray-900">
          {pokemon.name}
        </p>
      </div>
    </div>
  );
};

export default PokeItem;

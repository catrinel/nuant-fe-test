import Avatar from "../../common/Avatar/Avatar";
import { AvatarSize } from "../../common/Avatar/Avatar.interface";
import DetailRow from "../../common/DetailRow/DetailRow";
import { usePokeContext } from "../PokeContext/PokeContext";
import { XMarkIcon } from "@heroicons/react/20/solid";

const PokeItemDetail: React.FC = () => {
  const { state, setShowDetails, setSelectedPokemon } = usePokeContext();

  const handleClose = () => {
    setSelectedPokemon(undefined);
    setShowDetails(false);
  };

  const capitalize = (name: string) =>
    name.charAt(0).toUpperCase() + name.slice(1);

  return (
    <>
      <div className="px-4 sm:px-0 flex justify-between">
        {state.selectedPokemon ? (
          <b>
            <h3 className="text-lg font-semibold leading-7 text-gray-900">
              {capitalize(state.selectedPokemon.name)}'s Pokemon Information
            </h3>
          </b>
        ) : (
          <div>Sorry, no available information at this time</div>
        )}

        <XMarkIcon className="h-8 w-8 cursor-pointer" onClick={handleClose} />
      </div>

      {state.selectedPokemon && (
        <div className="mt-6 border-t border-gray-100 poke-container">
          <dl className="divide-y divide-gray-100">
            <div className="flex justify-between">
              <div className="flex-col ">
                <DetailRow label="Name" text={state.selectedPokemon.name} />
                <DetailRow
                  label="Weight"
                  text={state.selectedPokemon.weight?.toString()}
                />
                <DetailRow
                  label="Height"
                  text={state.selectedPokemon.height?.toString()}
                />
                <DetailRow
                  label="Base experience"
                  text={state.selectedPokemon.baseExperience?.toString()}
                />

                <DetailRow
                  label="Is default"
                  text={state.selectedPokemon.isDefault ? "Yes" : "No"}
                />

                <DetailRow
                  label="Types"
                  text={state.selectedPokemon.types
                    .map((type) => type.name)
                    .join(", ")}
                />

                <DetailRow
                  label="Abilities"
                  text={state.selectedPokemon.abilities
                    .map((ability) => ability.name)
                    .join(", ")}
                />

                <DetailRow
                  label="Moves"
                  text={state.selectedPokemon.moves.join(", ")}
                />
              </div>

              <div className="flex-col min-w-32">
                {Object.entries(state.selectedPokemon.sprites)
                  .filter(
                    (value) =>
                      !!value[1] &&
                      (value[0].includes("front") || value[0].includes("back"))
                  )
                  .map((image) => (
                    <Avatar
                      src={image[1]}
                      alt={image[0]}
                      size={AvatarSize.large}
                      key={image[0]}
                    />
                  ))
                  .reverse()}
              </div>
            </div>
          </dl>
        </div>
      )}
    </>
  );
};

export default PokeItemDetail;

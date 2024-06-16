import PokeProvider from "../../PokeManager/PokeContext/PokeProvider";
import PokeManager from "../../PokeManager/PokeManager";
import PageLayout from "../../common/PageLayout/PageLayout";

export default function LandingPage() {
  return (
    <PageLayout heading="Pokedex">
      <PokeProvider>
        <PokeManager />
      </PokeProvider>
    </PageLayout>
  );
}

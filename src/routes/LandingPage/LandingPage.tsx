import PokeManager from "../../PokeManager/PokeManager";
import PageLayout from "../../common/PageLayout/PageLayout";

export default function LandingPage() {
  return (
    <PageLayout heading="Pokedex">
      <PokeManager />
    </PageLayout>
  );
}

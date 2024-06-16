import PokeManager from "../../PokeManager/PokeManager";

export default function LandingPage() {
  return (
    <>
      <div className="min-h-full">
        <header className="bg-teal-50 shadow">
          <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
            <h3 className="text-3xl font-bold tracking-tight text-gray-900">
              Pokedex
            </h3>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <PokeManager />
          </div>
        </main>
      </div>
    </>
  );
}

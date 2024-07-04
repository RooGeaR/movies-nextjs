import CardList from "./components/CardList";
import ModalMovie from "./components/ModalMovie";

export default function Home() {
  return (
    <main className="flex w-screen flex-col items-center justify-center md:p-24 p-9">
      <ModalMovie />
      <CardList />
    </main>
  );
}

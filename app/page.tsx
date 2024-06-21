"use client"
import { Suspense } from "react";
import CardList from "./components/CardList";
import Modal from "./components/Modal";
import { useMovie } from "./hooks/useMovie";
import CardExpanded from "./components/CardExpanded";

export default function Home() {
  const { modalOpen, setModalOpen, selectedMovie } = useMovie()

  return (
    <main className="flex w-screen flex-col items-center justify-between md:p-24 p-9">
    <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <CardExpanded movie={selectedMovie}/>
    </Modal>
      <Suspense fallback={<div>Loading movie info...</div>} >
        <CardList />
      </Suspense>
    </main>
  );
}

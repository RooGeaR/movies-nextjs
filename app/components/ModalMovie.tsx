"use client"
import React from 'react'
import Modal from './Modal'
import CardExpanded from './CardExpanded'
import { useMovie } from '../hooks/useMovie'

const ModalMovie = () => {
  const { modalOpen, setModalOpen, selectedMovie } = useMovie()
  return (
    <>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <CardExpanded movie={selectedMovie}/>
      </Modal>
    </>
  )
}

export default ModalMovie
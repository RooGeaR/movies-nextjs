import React from "react";
import Button from "./Button";

type PaginationType = {
  nextAction: () => void;
  prevAction: () => void;
};

const Pagination = ({ nextAction, prevAction }: PaginationType) => {
  return (
    <>
      <Button onClick={prevAction}>Anterior</Button>
      <Button onClick={nextAction}>Siguiente</Button>
    </>
  );
};

export default Pagination;

import React from "react";
import { Container } from "reactstrap";
import { MainNav } from "./partials/nav";

export const MainLayout = ({ children }) => {
  return (
    <>
      <Container>
        <MainNav />
        {children}
      </Container>
    </>
  );
};

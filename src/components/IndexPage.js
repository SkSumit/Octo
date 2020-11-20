import React from "react";

import FAB from "./FAB";
import PortfolioCard from "./PortfolioCard";

import { Container } from "@material-ui/core";

class App extends React.Component {
  render() {
    return (
      <div>
        <Container maxWidth="sm">
          <FAB />
          <PortfolioCard />
        </Container>
      </div>
    );
  }
}

export default App;

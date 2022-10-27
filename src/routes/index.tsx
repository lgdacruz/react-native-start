import { StatusBar } from "expo-status-bar";
import React from "react";

import { Container, TextNormal } from "./indexStyked";

export default function App() {
  return (
    <Container>
      <StatusBar style="auto" />
      <TextNormal>Open up App.js to start working on your app!</TextNormal>
    </Container>
  );
}

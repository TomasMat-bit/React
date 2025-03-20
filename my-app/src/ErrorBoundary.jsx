import React, { Component } from "react";

class ErrorBoundary extends Component {
  state = { hasError: false, errorMessage: "" };

  static getDerivedStateFromError(error) {
    return { hasError: true }; // Keičia state, kad būtų rodomas klaidos pranešimas
  }

  componentDidCatch(error, info) {
    console.error(error, info); // Užfiksuojame klaidą ir informaciją apie ją
    this.setState({ errorMessage: error.message });
  }

  render() {
    if (this.state.hasError) {
      return <h2>Įvyko klaida: {this.state.errorMessage}</h2>;
    }
    return this.props.children; // Jeigu klaidos nėra, grąžinsime visus vaikus
  }
}

export default ErrorBoundary;

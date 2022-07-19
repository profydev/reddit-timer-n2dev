import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Normalize } from 'styled-normalize';
import Header from './Header';
import GlobalStyle from './GlobalStyle';
import theme from './theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Header />
        <Normalize />
        <GlobalStyle />
        <Routes>
          <Route path="/" />
          <Route path="/search" />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

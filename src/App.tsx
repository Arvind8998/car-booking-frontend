import React from 'react';
import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import tw from "twin.macro"
import { HomePage } from './app/Containers/HomePage';

const AppContainer = styled.div`
  ${tw`flex flex-col w-full h-full`}
`;
function App() {
  return (
    <div className="App">
      <HomePage />
    </div>
  );
}

export default App;

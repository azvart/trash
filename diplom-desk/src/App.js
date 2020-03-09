import React from 'react';
import './App.css';
import { Window,TitleBar,Text } from 'react-desktop/windows';

function App() {
  return (
    <div className="App">
      <Window color='#000'>
        <TitleBar title='Hello App' controls />
        <Text color='#000'>Hello</Text>
      </Window>
    </div>
  );
}

export default App;

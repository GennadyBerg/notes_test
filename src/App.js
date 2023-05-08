import logo from './logo.svg';
import './App.css';

import React, { useEffect, useState } from 'react';
function App() {

  onSelectListItem = (listItem) =>{
    let state = useState();
    state.selectedItem = listItem;
  }
  return (
    <>
      <Navbar>
        <Icon1></Icon1>
        <Icon2></Icon2>
        <Icon3></Icon3>
        <SearchBox></SearchBox>
      </Navbar>
      <CurrentItem.Provider value={ {selectedItem: selectedItem, onSelectListItem: onSelectListItem }}>
        <SideBarContext.Provider value={ {data: listItemsData }}>
          <Sidebar>
          </Sidebar>
        </SideBarContext.Provider>
        <Workspace>
        </Workspace>
      </CurrentItem.Provider>

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    </>
  );
}

export default App;

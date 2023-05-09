
import './App.css';

import React, { useEffect, useState } from 'react';
import { AddItemContext, CurrentItemContext } from './Contexts';
import { IconAdd, IconEdit, IconDelete } from './Components/Icons';
import { Sidebar, Workspace, SearchBox, addRecord } from './Components';
function App() {
  let state = useState();

  const onSelectListItem = (listItem) => {
    state.selectedItem = listItem;
  }
  return (
    <>
      <div className="App">
        <nav>
          <AddItemContext.Provider value={{addItemClick: addRecord }}>
              <IconAdd />
          </AddItemContext.Provider>
          <IconEdit />
          <IconDelete />
          <SearchBox />
        </nav>
        <CurrentItemContext.Provider value={{ selectedItem: state.selectedItem, onSelectListItem: onSelectListItem }}>
          <Sidebar />
          <Workspace />
        </CurrentItemContext.Provider>
      </div>
    </>
  );
}

export default App;

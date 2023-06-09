import { useEffect, useState } from "react";
import { SearchContext } from "../Contexts";
import { ListItem } from "./ListItem";

const DataProvider = () => {
    const [db, setDb] = useState(null);
    const [records, setRecords] = useState([]);
  
    useEffect(() => {
      // Open the IndexedDB database
      const request = window.indexedDB.open('my-db', 1);
  
      // Handle the success and error events
      request.onsuccess = () => {
        setDb(request.result);
      };
  
      request.onerror = (event) => {
        console.log('Error opening database', event);
      };
  
      // Create the object store if it doesn't exist
      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        db.createObjectStore('records', { keyPath: 'id' });
      };
    }, []);
  
    useEffect(() => {
      if (db) {
        // Read the records from the object store
        const transaction = db.transaction(['records'], 'readonly');
        const objectStore = transaction.objectStore('records');
        const request = objectStore.getAll();
  
        request.onsuccess = () => {
            <SearchContext.Consumer>
                { searchText => setRecords(request.result.filter(rec => rec.title.constains(searchText) || rec.text.constains(searchText))) }
          </SearchContext.Consumer>
        };
  
        request.onerror = (event) => {
          console.log('Error reading records', event);
        };
      }
    }, [db]);
  
    const addRecord = (record, event) => {
      event.preventDefault();
      //const record = { id: Date.now(), name: 'New Record' };
  
      if (db) {
        // Add a new record to the object store
        const transaction = db.transaction(['records'], 'readwrite');
        const objectStore = transaction.objectStore('records');
        const request = objectStore.add(record);
  
        request.onsuccess = () => {
          setRecords([...records, record]);
        };
  
        request.onerror = (event) => {
          console.log('Error adding record', event);
        };
      }
    };
  
    return (

        records.map(r => <ListItem title={r.title} text={r.text}/>)
    )
}

const dataProvider = <DataProvider />;

const addRecord = (record) => {
  dataProvider.addRecord(record)
}

export {DataProvider, addRecord}
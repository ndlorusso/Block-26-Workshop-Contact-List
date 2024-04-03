import { useState } from 'react'
import './App.css'
import ContactList from './components/ContactList';
// import SelectedContact from './components/SelectedContact';
// import dummyContacts from './components/ContactList';

function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  // console.log("Contacts", contacts);

  return (
    <>
    {selectedContactId ? (
      <div>Selected Contact View</div>
    ) : (
    <ContactList/>
    )}
    </>
  );
}

export default App

import { useState, useEffect } from "react";

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
    const [contact, setContact] = useState(null);
    console.log('SINGLE contact', contact);
    return (
        <>
        <h1>Hello World</h1>
        </>
    )
}

export default SelectedContact;
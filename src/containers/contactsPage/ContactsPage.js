import React from "react";
import { useState, useEffect } from "react";
import { ContactForm } from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  /*
  Define state variables for 
  contact info and duplicate check
  */
  const [name, setName] = useState("");
  const [names, setNames] = useState([]);
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [isDuplicate, setIsDuplicate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    /*
    Add contact info and clear data
    if the contact name is not a duplicate
    */
    if (!isDuplicate) {
      const name = e.target[0].value;
      const phone = e.target[1].value;
      const email = e.target[2].value;
      addContact(name, phone, email);
      setNames((prev) => [...prev, name]);
    } else {
      alert(
        "You have entered a name that is already in the system. Please enter a unique name."
      );
    }
    setName("");
    setPhone("");
    setEmail("");
    setIsDuplicate(false);
  };

  /*
  Using hooks, check for contact name in the 
  contacts array variable in props
  */
  useEffect(() => {
    if (names.includes(name)) {
      setIsDuplicate(true);
    }
    return () => setIsDuplicate(false);
  }, [name]);

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={name}
          setName={setName}
          phone={phone}
          setPhone={setPhone}
          email={email}
          setEmail={setEmail}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList objectArr={contacts} />
      </section>
    </div>
  );
};

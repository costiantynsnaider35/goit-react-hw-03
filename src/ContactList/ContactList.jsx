import Contact from "../Contact/Contact";
import s from "../ContactForm/ContactForm.module.css";

const ContactList = ({ filterContact, deleteContact }) => {
  return (
    <div>
      <ul className={s.contactList}>
        {filterContact.map((item) => {
          return (
            <li key={item.id} className={s.contactItem}>
              <Contact
                deleteContact={deleteContact}
                name={item.name}
                number={item.number}
                id={item.id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ContactList;

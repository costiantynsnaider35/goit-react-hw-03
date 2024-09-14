import s from "../Contact/Contact.module.css";
import { FaUser, FaPhoneAlt } from "react-icons/fa";

const Contact = ({ name, number, id, deleteContact }) => {
  return (
    <div className={s.contact}>
      <div className={s.containerList}>
        <p className={s.contactInfo}>
          <FaUser className={s.icon} />
          {name}
        </p>

        <a className={s.contactInfo} href={number}>
          <FaPhoneAlt className={s.icon} />
          {number}
        </a>
      </div>
      <button className={s.deleteBtn} onClick={() => deleteContact(id)}>
        Delete
      </button>
    </div>
  );
};

export default Contact;

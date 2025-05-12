import { useState } from "react";
import styles from "./Contact.module.css";
import Modal from "../modal/Modal";
import C from "../../../public/contact.jpg";
import logo from "../../../public/logo.svg";
const ContactForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

const handleSubmit = (e) => {
  e.preventDefault()
  openModal()
}
  return (
    <>
      <div className={styles.Contactheader}>
        <h1>Kontakt Mig</h1>
        <h2>Skive bare hvis du har spøgermål om rejser </h2>
      </div>

      <section className={styles.ContactFlex}>
        <div className={styles.ContactImg}>
          <img src={C} alt="" />
        </div>

        <div className={styles.ContactText}>
          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.Email}>
              <h2>Din email:</h2>
              <input type="email" required />
            </div>

            <div className={styles.Message}>
              <h2>Din besked:</h2>
              <textarea type="text" placeholder="spøgermål" required />
            </div>

            <button className={styles.ContactButton} type="submit">
              {" "}
              Send{" "}
            </button>
          </form>
        </div>
      </section>

      {isModalOpen && (
        <Modal onClose={closeModal}>
          <div className={styles.Thankmessage}>
            <h2>Tak for din mail!</h2>
            <p>Jeg vil svare på den så hurtigt som muligt</p>
            <img src={logo} alt="logo" />
          </div>
          <button onClick={closeModal}>Luk</button>
        </Modal>
      )}
    </>
  );
};
export default ContactForm;

import styles from "./contactStyles.module.css";

function contact() {
  return (
    <section id="contact" className={styles.container}>
      <h1 className="sectionTitle">Contact</h1>
      <form action="">
        <div className="formGroup">
          <label htmlFor="Name" hidden>
            Name
          </label>
          <input
            type="text"
            name="Name"
            id="Name"
            placeholder="Name"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="Email" hidden>
            Email
          </label>
          <input
            type="text"
            name="Email"
            id="Email"
            placeholder="Email"
            required
          />
        </div>
        <div className="formGroup">
          <label htmlFor="Message" hidden>
            Message
          </label>
          <textarea
            name="Message"
            id="Message"
            placeholder="Message"
            required
          ></textarea>
        </div>
          <input className="hover btn" type="submit" value="Submit" />
      </form>
    </section>
  );
}

export default contact;

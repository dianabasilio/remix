import styles from "../styles/index.module.scss";

export default function Index() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome to your contacts app</h1>
      <img className={styles.contacts} src="/network.avif" alt="network.avif" />
      <p>
        Organize and manage your contacts efficiently with this easy-to-use
        application. Save essential information such as names, phone numbers,
        emails, and addresses.
      </p>
      <p>
        Quickly find who you're looking for with the built-in search function.
        Add new contacts, edit existing ones, and delete the ones you no longer
        need.
      </p>
      <p>
        Keep your contacts up-to-date and at your fingertips anytime, from any
        device.
      </p>
    </div>
  );
}

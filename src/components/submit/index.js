import styles from './index.module.css'

export default function Submit() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>A monthly post delivered straight to your inbox</p>
      <div className={styles.submitEmail}>
      <input type="text" placeholder='Enter your email'/>
      <button>Submit</button>
      </div>
      <p className={styles.spam}>Zero spam, just the good stuff.</p>
    </div>
  );
}

import React from 'react';
import styles from './register.module.css';

function page() {
  return (
    <>
      <div className={styles.main}>
        <div className={styles.box}>
          <h1>Register</h1>
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email' />
          <input type="text" placeholder='Phone Number' />
          <input type="password" placeholder='Password' />
          <button type='submit'>Register</button>
        </div>
      </div>
    </>
  )
}

export default page

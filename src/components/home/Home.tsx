import React, { FC } from 'react'
import styles from './home.module.scss';

type Props = {
  children: React.ReactNode;
}

const Home: FC<Props> = ({children}) => {
  return (
    <section className={styles.main} id='home'>

      <div className={styles.inner_width}>
        <div className={styles.content}>
          <h2>Привет! </h2>
          <h1>Я</h1>
          <div className={styles.todo}></div>
        </div>
        {children}
      </div>
    </section>

        
  )
}

export default Home
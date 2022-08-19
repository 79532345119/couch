import React, { FC } from 'react'
import styles from './content.module.scss';

type Props = {
    children: React.ReactNode;
}

const Content: FC<Props> = ({children}) => {
  return (
    <section className={styles.main}>{children}</section>
  )
}

export default Content
import React, { FC } from 'react'
import styles from './icon-button.module.scss';

type Props = {
    children: React.ReactNode;
}

const IconButton: FC<Props> = ({children}) => {
  return (
    <div className={styles.main}>{children}</div>
  )
}

export default IconButton
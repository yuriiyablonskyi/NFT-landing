import { FC } from 'react'
import { СontainerProps } from '../../../types'
import styles from './Container.module.sass'

const Container: FC<СontainerProps> = ({ children }) => <div className={styles.container}>{children}</div>

export default Container

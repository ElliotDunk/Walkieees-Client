import React, { PureComponent } from 'react'
import styles from './emailSubscription.module.css'

import { ReactComponent as Envelope } from '../../assets/svgs/envelope.svg'

export default class EmailSubscription extends PureComponent {
    render() {
        return (
            <div className={styles.container}>
            <Envelope fill="#282cdd" className={styles.envelope} />
            <input className={styles.input} type="text" placeholder="Enter Your Email" />
        </div>
        )
    }
}


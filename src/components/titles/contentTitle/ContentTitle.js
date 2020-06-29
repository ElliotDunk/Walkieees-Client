import React from 'react'
import styles from './contentTitle.module.css'

export default function ContentTitle(props) {
    return (
        <React.Fragment>
            <h1 className={styles.title}>{props.text}</h1>
        </React.Fragment>
    )
}

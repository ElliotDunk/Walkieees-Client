import React, { Component } from 'react'
import styles from './addImageButton.module.css'

import { ReactComponent as Plus } from '../../../../assets/svgs/plus-circle.svg'
import { ReactComponent as Times } from '../../../../assets/svgs/times-circle.svg'

export default class AddImageButton extends Component {
    render() {
        return (
            <div style={{ backgroundImage: `url(${this.props.thumbnail})`, border: this.props.thumbnail === undefined ? "1px dashed #d8d8d8" : "1px dashed rgba(0, 0, 0, 0)" }} className={styles.container} onClick={this.props.onClick}>
                <Plus fill="#282cdd" style={{ display: this.props.thumbnail === undefined ? "block" : "none" }} className={styles.svg} />
                <Times fill="red" style={{ display: this.props.thumbnail === undefined ? "none" : "block" }} className={styles.svg} />
            </div>
        )
    }
}

import React from 'react'
import styles from './footer.module.css'

import FooterLarge from './footerLarge/FooterLarge'
import FooterMedium from './footerMedium/FooterMedium'
import FooterSmall from './footerSmall/FooterSmall'

export default function Footer() {
    return (
        <React.Fragment>
            <div className={styles.footerLarge}>
                <FooterLarge />
            </div>
            <div className={styles.footerMedium}>
                <FooterMedium />
            </div>
            <div className={styles.footerSmall}>
                <FooterSmall />
            </div>
        </React.Fragment>
    )
}

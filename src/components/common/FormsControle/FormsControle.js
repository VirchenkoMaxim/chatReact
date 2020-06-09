import React from 'react'
import styles from './FormControle.module.scss'

export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.error && meta.touched;
    return (
        <span className={styles.hasError ? styles.error : null}>
            {props.typefield === "input" ?
                <input  {...input}  {...props} />
                : <textarea {...input}  {...props} />}
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </span>
    )
}

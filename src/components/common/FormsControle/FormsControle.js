import React from 'react'
import './FormControle.scss'

export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.error && meta.touched;
    return (
        <div className={hasError ? "error" : null}>
            {props.typeField == "input" ?
                <input  {...input}  {...props} />
                : <textarea {...input}  {...props} />}
            <div>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

import classes from './formsControl.module.css';
import React from 'react';
import { Field } from 'redux-form';


export const Textarea = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={(hasError ? classes.error : '')}>
            <textarea {...input} {...props} />
            <div className={classes.span}>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}
export const Input = ({ input, meta, ...props }) => {
    const hasError = meta.touched && meta.error
    return (
        <div className={(hasError ? classes.error : '')}>
            <input {...input} {...props} />
            <div className={classes.span}>
                {hasError && <span>{meta.error}</span>}
            </div>
        </div>
    )
}
export const createField = (placeholder,name,validators,component,props = {},text='')=>{
    <div>
        <Field placeholder={placeholder} name={name}
        validate={validators}
        component={component}
        {...props}
        />{text}
    </div>
}
import React from 'react'
import classes from './Login.module.css';
import { Field, reduxForm } from 'redux-form'
import { Input } from '../common/formsControl/formsControl'
import { lengthCreator, required } from '../utils/validators/validators'
import { connect } from 'react-redux';
import { login } from '../Redux/auth-reduser';
import { Redirect } from 'react-router-dom';

let maxLength10 = lengthCreator(30)

const LoginForm = (props) => {   // in props resive - handleSubmit
    return (
        <div>
            <form onSubmit={props.handleSubmit}> {/* prevent defuult упаковка в обьект  и передача данных в onSubmit*/}
                <div>
                    <Field placeholder={'email'} name={'email'} component={Input} validate={[required, maxLength10]} />
                </div>
                <div>
                    <Field placeholder={'password'} name={'password'} component={Input} validate={[required, maxLength10]} />
                </div>
                <div>
                    <Field type="checkbox" name={'rememberMe'} component={'input'} /> remember me
                </div>
                {props.error ? <div className={classes.loginFormError}> {props.error} </div>  : ''} 
                    
                {props.capcha ? <div> {<img src={props.capcha  } alt={''}/>   }   </div>  : ''}
                {props.capcha &&  <Field type="text" name={'capcha'} component={Input} />}
               
                    <button>login</button> {/* в форме auto submit */}
                
            </form>
        </div>
    )
}

const LoginReduxForm = reduxForm({   //связывает с редьюсером
    form: 'login'  // после создания форм в редьюсере создается подъобьект логин
})(LoginForm)



const Login = (props) => {

    const onSubmit = (formData) => {  //придут сюда все значения из форм !! через submit!
        console.log(formData) // отобразим все данные!
        props.login(formData.email, formData.password, formData.rememberMe, formData.capcha)

    }
    if (props.isAuth) {
        return <Redirect to={'/profile'} />
    }
    return (
        <div className={classes.loginForm}>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} capcha={props.capcha} /> {/* передача родителю данных из form! */}
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        capcha: state.auth.capcha,
    }
}

export default connect(mapStateToProps, { login })(Login)
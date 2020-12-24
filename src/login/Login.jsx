import React from 'react'
import { Field, reduxForm } from 'redux-form'

const LoginForm = (props) => {   // in props resive - handleSubmit
    return (
              <form onSubmit = {props.handleSubmit}> {/* prevent defuult упаковка в обьект  и передача данных в onSubmit*/}
                <div>
                    <Field placeholder={'login'} name={'login'} component={'input'}/> 
                </div>
                <div>
                    <Field placeholder={'password'}name={'password'} component={'input'}/>
                </div>
                <div>
                    <Field type="checkbox" name={'rememberMe'} component={'input'}/> remember me
                </div>
                <div>
                     <button>login</button> {/* в форме auto submit */}
                </div>
            </form>

    )
}

const LoginReduxForm = reduxForm({   //связывает с редьюсером
    form:'login'  // после создания форм в редьюсере создается подъобьект логин
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData)=>{  //придут сюда все значения из форм !! через submit!
    console.log(formData) // отобразим все данные!
}

    return (
        <div>
            <h1>LOGIN</h1>
           <LoginReduxForm onSubmit={onSubmit} /> {/* передача родителю данных из form! */}
        </div>

    )
}
export default Login
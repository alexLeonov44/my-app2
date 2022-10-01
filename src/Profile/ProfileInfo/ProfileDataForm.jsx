import React from 'react';
import {  Input } from '../../common/formsControl/formsControl';
import classes from './ProfileInfo.module.css';
import { Field, reduxForm } from 'redux-form'
import { lengthCreator, required } from '../../utils/validators/validators';

let maxLength10 = lengthCreator(30)

const ProfileDataForm = (props) => {  // in props resive - handleSubmit
    
    return <div>
        form
        <form onSubmit={props.handleSubmit}  > {/* prevent defuult упаковка в обьект  и передача данных в onSubmit*/}
            <div>
                {!props.isOwner && <button onClick={props.goToEditMode}>cansel</button>}

            </div>
            <div className={classes.descriptionBlock}>
                <Field placeholder={'fullName'} name={'fullName'} component={Input}  />  <br />
                <Field placeholder={'aboutMe'} name={'aboutMe'} component={Input}  /> <br />
                <div className={classes.job}>
                    <b>lookin for a job</b>:
        <Field type="checkbox" name={'lookingForAJob'} component={Input} />
                    <div>
                        <b>my professional skills</b>:
          <Field placeholder={'my professional skills'} name={'lookingForAJobDescription'} component={Input}  />
                    
                    </div>

                </div>

                <div>
                    <b>contacts</b>  {Object.keys(props.profile.contacts).map(key => {
                        return <div>
                            <b>{key}: </b> <Field key={key} placeholder={key} name={'contacts.' + key} component={Input}  />
                        </div>
                    })}
                </div>
            </div>
            {props.error ?
                <div className={classes.profileDataFormError}>
                    {props.error}
                </div>
                : ''}
            <button>submit</button>
        </form>
    </div>
}

const ProfileDataReduxForm = reduxForm({   //связывает с редьюсером
    form: 'ProfileData'  // после создания форм в редьюсере создается подъобьект логин
})(ProfileDataForm)

export default ProfileDataReduxForm
import React, { useState } from 'react';
import Preloader from '../../common/preloader/Preloader';
import ProfileDataReduxForm from './ProfileDataForm';
import classes from './ProfileInfo.module.css';
import ProfileStatusWithHook from './ProfileStatusWithHook';


const ProfileInfo = (props) => {
    let [editMode, setEditMode] = useState(false)

    if (!props.profile) {
        return <Preloader />
    }
    const onPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0])
        }
    }
    const onSubmit = (formData) => {  //придут сюда все значения из форм !! через submit!
        console.log(formData) // отобразим все данные!
        props.saveProfile(formData).then(()=>{
            setEditMode(false)
        })
    }
    return (
        <div className={classes.content}>

            {/* <div className={classes.HeadImage}>
                <img src="https://hackernoon.com/hn-images/1*HSisLuifMO6KbLfPOKtLow.jpeg" alt='' />
            </div> */}

            <div className={classes.profilePhoto}>
                {<img src={props.profile.photos.large || 'https://cdn.statically.io/img/www.celebrities-contact.com//wp-content/uploads/2019/07/ava-max-email-phone-contact-581.jpg'} alt='' />}
                {!props.isOwner && <input type={'file'} onChange={onPhotoSelected} />}
            </div>

            <div className={classes.ProfileInfo}>
                <div>
                    <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus} />
                </div>{editMode ?
                    <ProfileDataReduxForm isOwner={props.isOwner}  goToEditMode={() => setEditMode(false)} onSubmit={onSubmit} profile={props.profile} initialValues={props.profile}/>
                    : <ProfileData profile={props.profile} goToEditMode={() => setEditMode(true)} isOwner={props.isOwner} />
                }
            </div>


        </div>

    )
}
const ProfileData = (props) => {
    return <div className={classes.descriptionBlock}>

        <div>
            {!props.isOwner && <button onClick={props.goToEditMode}>edit</button>}
        </div>

        <p className={classes.descriptionBlockName} >{props.profile.fullName}</p>  
  about me " {props.profile.aboutMe} " <br />
        <div className={classes.job}>
            <b>lookin for a job</b>: {props.profile.lookingForAJob ? 'yes' : 'no'}
            {props.profile.lookingForAJob &&
                <div>
                    <b>my professional skills</b>:{props.profile.lookingForAJobDescription}
                </div>
            }
        </div>
        <div className={classes.contacts}>
            <b>contacts</b>  {Object.keys(props.profile.contacts).map(key => {
                return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]} />
            })}
        </div>
    </div>
}

const Contact = ({ contactTitle, contactValue }) => {
    return <div><b>{contactTitle}</b> : {contactValue} </div>
}

export default ProfileInfo


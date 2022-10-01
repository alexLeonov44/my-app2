import React, { useState } from 'react';
import classes from './ProfileInfo.module.css';


const ProfileStatusWithHook = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    let activateEditMode = () => {
        setEditMode(true)
    }

    let deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    let statusOnChange = (e) => {

        setStatus(e.currentTarget.value)
    }

    
    return (
        <div>
            { !editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || 'no status'}</span>
                </div>
            }
            { editMode &&
                <div>
                    <input onChange={statusOnChange} autoFocus={true} onBlur={deactivateEditMode} value={status} />
                </div>
            }
        </div>

    )

}

export default ProfileStatusWithHook
// value={this.state.status}
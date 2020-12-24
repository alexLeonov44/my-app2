import React from 'react';
import Preloader from '../../common/preloader/Preloader';
import classes from './ProfileInfo.module.css';


class ProfileStatus extends React.Component {
    statusInputRef = React.createRef()

    state = {
        editMode: false,
        status:this.props.status
    }
    activateEditMode = () => {
        this.setState({
            editMode:true
        })

    }
    deactivateEditMode = () => {
        this.setState({
            editMode:false
        })
        this.props.updateStatus(this.statusInputRef.current.value)
    }
    
    
        
        
    
   
    render() {
        return (
            <div>
                { !this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.state.status}</span>
                    </div>
                }
                { this.state.editMode &&
                    <div>
                        <input ref={this.statusInputRef} autoFocus={true} onBlur={this.deactivateEditMode}  /> 
                    </div>
                }
            </div>

        )
    }
}

export default ProfileStatus
// value={this.state.status}
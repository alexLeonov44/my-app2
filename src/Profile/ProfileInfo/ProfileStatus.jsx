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
        this.props.updateStatus(this.state.status)
    }
    
    statusOnChange=(e)=>{
        this.setState({
           status:e.target.value 
        })
    }
    componentDidUpdate=(prevProps,prevState)=>{
       if(prevProps.status !== this.props.status){
        this.setState({
            status:this.props.status 
          })
       }
         
    }
        
    
   
    render() {
        return (
            <div>
                { !this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.state.status ||'no status'}</span>
                    </div>
                }
                { this.state.editMode &&
                    <div>
                        <input onChange={this.statusOnChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status}  /> 
                    </div>
                }
            </div>

        )
    }
}

export default ProfileStatus
// value={this.state.status}
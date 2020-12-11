import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Users.module.css';
import { follow } from '../api/api';
import { unFollow } from '../api/api';;


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return <div className={classes.users}>

        <div className={classes.span }>{
            pages.map(p => <span className={props.currentPage === p && classes.selectedPage} onClick={() => { props.onPageChanged(p) }} >{p}</span>)
        } </div>

        {
            props.users.map(u => <div className={classes.usersItems} key={u.id}>

                <div>
                    <NavLink to = {'/profile/' + u.id}>
                    <img src={u.photos.small || "https://cdn.statically.io/img/www.celebrities-contact.com//wp-content/uploads/2019/07/ava-max-email-phone-contact-581.jpg"} alt='' />
                    </NavLink>
                </div>


                <div>
                    {u.followed ? <button disabled = {props.followingInProgress.some(id=> id === u.id)} onClick={() =>{
                        props.toggleIsFollowingProgress(true,u.id)
                        unFollow(u.id).then(response => { if (response.data.resultCode === 0) {props.unfollow(u.id)}
                        props.toggleIsFollowingProgress(false,u.id)}) } 
                         } >unfollow</button>

                     : <button disabled = {props.followingInProgress.some(id=> id === u.id)} onClick={() =>{ 
                        props.toggleIsFollowingProgress(true,u.id)
                         follow(u.id).then(response => { if (response.data.resultCode === 0) { props.follow(u.id)} 
                         props.toggleIsFollowingProgress(false,u.id) }) }
                         }>follow</button> 
                    }
                </div>

                <div>
                    name: {u.name} <br />
                 status: {u.status} <br />
                 location:{'u.location.sity'}
                </div>

            </div>)
        }
    </div>

}
export default Users
import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Users.module.css';


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    let nextPage = ()=>{
        props.onPageChanged(props.currentPage +1)  
    }
    let prevPage = ()=>{
        props.onPageChanged(props.currentPage -1)  
    }
    
    return <div className={classes.users}>
              <button onClick={() => prevPage() }>prev</button>
              <button onClick={() => nextPage() }>next</button>

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
                         props.unfollow(u.id) } 
                         } >unfollow</button>

                     : <button disabled = {props.followingInProgress.some(id=> id === u.id)} onClick={() =>{ 
                        props.follow(u.id) }
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
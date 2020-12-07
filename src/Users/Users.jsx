import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './Users.module.css';
import * as axios from 'axios';


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
                    {u.followed ? <button onClick={() =>{
                    
                    axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{
                         withCredentials: true,
                         headers:{'API-KEY':'93fde4bc-5d79-4c02-83d6-e17466ee5299'}})
                    
                    .then(response => {
                      if (response.data.resultCode === 0) {
                        props.unfollow(u.id)
                      }
                        })
                    } 
                     } >unfollow</button>
                     : <button onClick={() =>{
                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,{},{
                             withCredentials: true,
                             headers:{'API-KEY':'93fde4bc-5d79-4c02-83d6-e17466ee5299'}})

                             .then(response => {
                            if (response.data.resultCode === 0) {
                                props.follow(u.id)
                            }
                              })
                        
                       }
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
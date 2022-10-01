import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import Paginator from '../common/paginator/Paginator';
import classes from './Users.module.css';


let Users = (props) => {

    return <div className={classes.users}>

        <Paginator totalUsersCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage}
            onPageChanged={props.onPageChanged} />

        {
            props.users.map(u => <div className={classes.usersItems} key={u.id}>

                <div>
                    <NavLink to={'/profile/' + u.id}>
                        <img src={u.photos.small || "https://cdn.statically.io/img/www.celebrities-contact.com//wp-content/uploads/2019/07/ava-max-email-phone-contact-581.jpg"} alt='' />
                    </NavLink>
                </div>


                <div>
                    {u.followed ? <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                        props.unfollow(u.id)
                    }
                    } >unfollow</button>

                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.follow(u.id)
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
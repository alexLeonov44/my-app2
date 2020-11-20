import React from 'react';
import classes from './Users.module.css';

let Users = (props) => {

    if (props.users.length === 0) {
        props.setUsers([
            { id: 4, followed: true, fullName: 'alex', status: 'handsome', location: { sity: 'mogilew', country: 'belarus' } },
            { id: 5, followed: true, fullName: 'alex', status: 'handsome', location: { sity: 'mogilew', country: 'belarus' } },
            { id: 6, followed: true, fullName: 'alex', status: 'handsome', location: { sity: 'mogilew', country: 'belarus' } },
          ]
        )
    }
  

    return <div className={classes.users}>
        {
            props.users.map(u => <div className={classes.usersItems} key={u.id}>

                <div>
                    <img src="https://cdn.statically.io/img/www.celebrities-contact.com//wp-content/uploads/2019/07/ava-max-email-phone-contact-581.jpg" alt='image' />
                </div>

                <div>
                    {u.followed ? <button onClick={() => props.unfollow(u.id)} >unfollow</button>
                        : <button onClick={() => props.follow(u.id)}>follow</button>
                    }
                </div>

                <div>
                    name: {u.fullName} <br />
                status: {u.status} <br />
                location:{u.location.sity}
                </div>

            </div>)
        }
    </div>
}

export default Users
import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';

class Users extends React.Component {

    constructor(props) {
        super(props)
        if (this.props.users.length === 0) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
                debugger
                this.props.setUsers(response.data.items)
            })
        }
    }

    render() {
        return <div className={classes.users}>
            <button onClick={this.getUser}>get Users</button>
            {
                this.props.users.map(u => <div className={classes.usersItems} key={u.id}>

                    <div>
                        <img src="https://cdn.statically.io/img/www.celebrities-contact.com//wp-content/uploads/2019/07/ava-max-email-phone-contact-581.jpg" alt='image' />
                    </div>

                    <div>
                        {u.followed ? <button onClick={() => this.props.unfollow(u.id)} >unfollow</button>
                            : <button onClick={() => this.props.follow(u.id)}>follow</button>
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
}
export default Users
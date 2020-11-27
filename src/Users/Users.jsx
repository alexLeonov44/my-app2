import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';

class Users extends React.Component {

    componentDidMount() {

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setToUserCount(response.data.totalCount)
        })
    }

    onPageChanged = (pageNumber)=>{
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)   
        })
    }

    render() {
        let pagesCount = Math.ceil(this.props.totalUsersCount / this.props.pageSize)
        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        return <div className={classes.users}>

            <div className={classes.span}>{
                pages.map(p => <span className={this.props.currentPage === p && classes.selectedPage}  onClick={()=>{this.onPageChanged(p)}} >{p}</span>)
            } </div>

            {
             this.props.users.map(u => <div className={classes.usersItems} key={u.id}>

             <div>
                 <img src={u.photos.small || "https://cdn.statically.io/img/www.celebrities-contact.com//wp-content/uploads/2019/07/ava-max-email-phone-contact-581.jpg"} alt='image' />
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
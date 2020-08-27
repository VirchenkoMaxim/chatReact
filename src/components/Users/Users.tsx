import { RootState } from '../../redux';
import React, { useState, useEffect } from 'react'
import './Users.scss'
import defaultUser from '../../assets/img/defaultUser.png'
import { NavLink } from 'react-router-dom';
import { Paginator } from '../common/Paginator/Paginator';
import { usersSelectors, usersActions } from '../../redux/users';
import { useDispatch, useSelector } from 'react-redux'
import Preloader from '../common/Preloader';
import { Button, withStyles } from '@material-ui/core';
const StyledButton = withStyles({
    root: {
        borderRadius: 0,

    }
})(Button);
export const Users = () => {
    const dispatch = useDispatch()
    let users = useSelector((state: RootState) => usersSelectors.getUsers(state))
    let pageSize = useSelector((state: RootState) => usersSelectors.getPageSize(state))
    let totalUsersCount = useSelector((state: RootState) => usersSelectors.getTotalUsersCount(state))
    let currentPage = useSelector((state: RootState) => usersSelectors.getCurrentPage(state))
    let isFetching = useSelector((state: RootState) => usersSelectors.getIsFetching(state))
    let followingInProgress = useSelector((state: RootState) => usersSelectors.getFollowingInProgress(state))

    useEffect(() => {
        dispatch(usersActions.requestUsers(currentPage, pageSize))
    }, [])

    let [portionNumber, setPortionNumber] = useState(1)
    let onPageChanged = (pageNumber: number): void => {
        dispatch(usersActions.pageChange(pageNumber, pageSize))
    }
    let onPortionNext = (): void => {
        setPortionNumber(portionNumber++)
    }
    let onPortionPrev = (): void => {
        setPortionNumber(portionNumber--)
    }

    let pageCount: number = Math.ceil(totalUsersCount / pageSize);
    let pages = [];
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i);
    }
    if (isFetching) {
        return <Preloader />
    }
    return (
        <div>
            <Paginator
                portionNumber={portionNumber}
                onPortionNext={onPortionNext}
                onPortionPrev={onPortionPrev}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
                currentPage={currentPage}
            />
            {
                users.map(item =>
                    <div key={item.id} className="user-container" >
                        <NavLink to={'/profile/' + item.id} >
                            <img className="user-container__img" src={
                                item.photos.small != null ? item.photos.small : defaultUser
                            } alt="" />
                        </NavLink>
                        < div className="user-container__info" >
                            <div>
                                <h3>{item.name} </h3>
                                {item.followed
                                    ? <StyledButton
                                        variant="contained"
                                        size="small"
                                        color="primary"
                                        disabled={followingInProgress.some(id => id === item.id)}
                                        onClick={() => { dispatch(usersActions.unfollow(item.id)) }}
                                    > Unfollow </StyledButton>
                                    : <StyledButton
                                        variant="contained"
                                        size="small"
                                        color="primary"
                                        disabled={followingInProgress.some(id => id === item.id)}
                                        onClick={() => { dispatch(usersActions.follow(item.id)) }}> Follow
                                        </StyledButton>}
                            </div>
                            <p>{item.status}</p>

                        </div>
                    </div>
                )
            }
            <Paginator
                portionNumber={portionNumber}
                onPortionNext={onPortionNext}
                onPortionPrev={onPortionPrev}
                totalUsersCount={totalUsersCount}
                pageSize={pageSize}
                onPageChanged={onPageChanged}
                currentPage={currentPage}
            />
        </div>
    )
}

export default Users

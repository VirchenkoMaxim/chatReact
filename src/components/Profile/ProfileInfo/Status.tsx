import React, { useState, useEffect, HTMLAttributes, FC } from 'react'
import { useDispatch } from 'react-redux';
import { profileActions } from '../../../redux/profile';
import styles from '../styles/ProfileInfo.module.scss'
type MyProps = {
    status: string
    updateProfileStatus: boolean

}
type Props = MyProps

export const Status: FC<Props> = (props) => {
    const dispatch = useDispatch();
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const statusChange = (e: any) => {
        setStatus(e.target.value)
    }
    const activateEditMode = () => {
        setEditMode(true)

    }
    const deactivateEditMode = () => {
        setEditMode(false)
        dispatch(profileActions.updateProfileStatus(status))
    }
    return (
        <>
            {!editMode ?
                <div>
                    <span onClick={activateEditMode} >{props.status || 'no status'}</span>
                </div> :
                <div>
                    <textarea
                        onChange={statusChange}
                        autoFocus={true}
                        onBlur={deactivateEditMode}
                        value={status} />
                </div>

            }

        </>
    )
}


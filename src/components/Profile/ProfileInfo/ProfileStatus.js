import React, { useState, useEffect } from 'react'


const ProfileStatus = (props) => {
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const statusChange = (e) => {
        setStatus(e.target.value)
    }
    const activateEditMode = () => {
        setEditMode(true)

    }
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateProfileStatus(status)
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

export default ProfileStatus

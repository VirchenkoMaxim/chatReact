import React, { Component } from 'react'

export class ProfileStatus extends Component {
    state = {
        editMode: false,
        status: this.props.status
    }
    statusChange = (e) => {
        this.setState({
            status: e.target.value

        })
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({ status: this.props.status })
        }
    }
    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false
        })

        this.props.updateProfileStatus(this.state.status)
    }
    render() {
        return (
            <>
                {!this.state.editMode ?
                    <div>
                        <span onClick={this.activateEditMode} >{this.props.status || 'no status'}</span>
                    </div> :
                    <div>
                        <textarea
                            onChange={this.statusChange}
                            autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} />
                    </div>

                }

            </>
        )
    }
}

export default ProfileStatus

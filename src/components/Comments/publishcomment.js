import React from 'react'
import { connect } from 'react-redux'
import actions from '../../actions'

class PublishComment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      content: ''
    }
  }

  commentInputChange(event) {
    const newText = event.target.value;
    this.setState(() => {
      return {
        content: newText
      }
    })
  }

  submitComment(event) {
    if (this.state.content !== '') {
      const {
        props: {
          user
        },
      } = this;
      this.props.publishComment(user.profilePic, user.username, this.state.content)

    }
    event.preventDefault();
  }

  render() {


    return (
      <form className="comment-publish row" onSubmit={event => this.submitComment(event)}>
        <div className="col-8 comment-input">
          <input
            type="text"
            placeholder='Leave a comment'
            onChange={event => this.commentInputChange(event)}
          />
        </div>

        <button className="btn btn-success col-2" type="submit" value="submit">Submit</button>
      </form>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments,
    user: state.currentUser
  }
}

const mapDispatchToProps = dispatch => {
  return {
    publishComment: (username, profilePic, content) => {
      dispatch(actions.publishComment(username, profilePic, content))
    }
  }
}


export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PublishComment)
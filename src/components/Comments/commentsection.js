import React from 'react'
import { connect } from 'react-redux'

import Comment from '../Comments/comment'
import PublishComment from '../Comments/publishcomment'

class CommentSection extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      comments: this.props.comments
    }
  }
  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.comment !== this.props.comments) {
  //     this.setState({ comments: nextProps.comments });
  //   }
  //   console.log(nextProps)
  // }

  componentDidUpdate(prevProps) {
    if (this.props.comments !== prevProps.comments) // Check if it's a new user, you can also use some unique property, like the ID  (this.props.user.id !== prevProps.user.id)
    {
      this.setState(() => {
        return {
          comments: this.props.comments
        }
      });
    }
  }


  render() {
    const {
      props: {
        comments,
        user
      },
    } = this;

    return (
      <React.Fragment>
        <div className="comment-container">
          {this.state.comments.map(comment => (
            <Comment
              key={comment.id}
              id={comment.id}
              username={comment.username}
              profilePic={comment.profilePic}
              content={comment.content}
              date={comment.date}
              likes={comment.likes}
              activeBtn={comment.activeBtn}
            ></Comment>
          ))}
        </div>

        <PublishComment
          username={user.username}
          profilePic={user.profilePic}
        ></PublishComment>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    comments: state.comments,
    user: state.currentUser
  }
}

// Khi muốn xài actions


export default connect(
  mapStateToProps,
  null,
)(CommentSection)
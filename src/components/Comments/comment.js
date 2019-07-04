import React from 'react'
import PropTypes from 'prop-types';
import './comment.css'

import actions from '../../actions'
import { connect } from 'react-redux'

class Comment extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      activeBtn: this.props.activeBtn,
      likes: this.props.likes
    };
  }
  static propTypes = {
    username: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    profilePic: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  };


  like = () => {
    if (this.state.activeBtn === '' || this.state.activeBtn === 'dislike') {
      this.props.commentLike(this.props.id, 'like')
      this.setState({
        activeBtn: 'like',
        likes: this.state.likes + 1
      })
    }
  }

  dislike = () => {
    if (this.state.activeBtn === '' || this.state.activeBtn === 'like') {
      this.props.commentDislike(this.props.id, 'dislike')
      this.setState({
        likes: this.state.likes - 1,
        activeBtn: 'dislike'
      })
    }
  }

  render() {
    const {
      props: {
        username,
        profilePic,
        content,
        date
      },
    } = this;

    return (
      <div className="comment row" value={this.state.likes}>
        <div className="profilePic col-3">
          <img src={profilePic} alt="Profile Picture"></img>
          <p>{username}</p>

        </div>

        <div className="content col-8">
          <div className="dates row">
            <p className="text-muted">{date}</p>
          </div>

          <div className="comment-content row">
            {content}
          </div>

          <div className="likes">
            <i className={(this.state.activeBtn === "like" ? 'active' : '') + ' ' + "fas fa-thumbs-up"} onClick={() => this.like()}></i>
            <span>{this.state.likes}</span>
            <i className={(this.state.activeBtn === "dislike" ? 'active' : '') + ' ' + "fas fa-thumbs-down"} onClick={() => this.dislike()}></i>
          </div>

        </div>
      </div >
    )

  }
}

const mapDispatchToProps = dispatch => {
  return {
    commentLike: (id, activeBtn) => {
      dispatch(actions.commentLike(id, activeBtn))
    },
    commentDislike: (id, activeBtn) => {
      dispatch(actions.commentDislike(id, activeBtn))
    },
  }
}

export default connect(
  null,
  mapDispatchToProps,
)(Comment)
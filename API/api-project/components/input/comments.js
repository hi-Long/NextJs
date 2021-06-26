import { useEffect, useState } from 'react';

import CommentList from './comment-list';
import NewComment from './new-comment';
import classes from './comments.module.css';
import axios from 'axios';

function Comments(props) {
  const { eventId } = props;

  const [showComments, setShowComments] = useState(false)
  const [comments, setComments] = useState([])

  function toggleCommentsHandler() {
    setShowComments((prevStatus) => !prevStatus)
  }

  useEffect(async () => {
    if (showComments) {
      const response = await axios.get('/api/events/' + eventId)
      setComments(response.data.comments)
    }
  }, [showComments])

  async function addCommentHandler(commentData) {
    // send data to API
    const request = await axios.post('/api/events/' + eventId, commentData)

  }

  return (
    <section className={classes.comments}>
      <button onClick={toggleCommentsHandler}>
        {showComments ? 'Hide' : 'Show'} Comments
      </button>
      {showComments && <NewComment onAddComment={addCommentHandler} />}
      {showComments && <CommentList comments={comments} />}
    </section>
  );
}

export default Comments;

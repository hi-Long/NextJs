import classes from './comment-list.module.css';

const CommentList = props => {
  return (
    <ul className={classes.comments}>
      {props.comments.map(c => (
        <li key={c._id}>
          <p>{c.text}</p>
          <div>
            By <address>{c.name}</address>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default CommentList;

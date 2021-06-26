import ReactDOM from 'react-dom'
import { useAppSelector } from '../../store/hooks';
import classes from './notification.module.css';

const Notification = () => {
    const { title, message, status } = useAppSelector(selector => selector.ui);

    let statusClasses = '';

    if (status === 'success') {
        statusClasses = classes.success;
    }

    if (status === 'error') {
        statusClasses = classes.error;
    }

    const cssClasses = `${classes.notification} ${statusClasses}`;

    return ReactDOM.createPortal((
        <div className={cssClasses}>
            <h2>{title}</h2>
            <p>{message}</p>
        </div>), document.getElementById('notifications')
    );
}

export default Notification;
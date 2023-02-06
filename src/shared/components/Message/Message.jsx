import PropTypes from 'prop-types';

import styles from './message.module.scss';

const Message = ({text}) => {
    return(
        <div className={styles.wrapper}>
            <p className={styles.message}>{text}</p>
        </div>
    )
}

export default Message;

Message.propTypes = {
    text: PropTypes.string.isRequired,
}
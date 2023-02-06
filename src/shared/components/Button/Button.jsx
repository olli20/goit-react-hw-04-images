import {memo} from 'react';

import PropTypes from 'prop-types';

import styles from './button.module.scss';

const Button = ({children, type, onClick}) => {
    return(
        <div className={styles.wrapper}>
            <button className={styles.button} onClick={onClick} type={type}>{children}</button>
        </div>
    )
}

export default memo(Button);

Button.defaultProps = {
    type: "button",
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
}
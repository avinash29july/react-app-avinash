import React from "react";
import styles from './Card.module.scss';

const Card = (props) => {
    const cardElement = <><div className={styles.div}>{props.children}</div></>;
    return<>{cardElement}</>
};

export default Card;
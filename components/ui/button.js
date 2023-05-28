import React from 'react';
import Link from 'next/link';
import classes from "./button.module.css"

function Button(props) {
    const {link,children,clickHandler}=props
    if(link){
        return (
            <Link href={link} className={classes.btn}>
                {children}
            </Link>
        )
    }
    return <button className={classes.btn} onClick={clickHandler}>{children}</button>
}

export default Button
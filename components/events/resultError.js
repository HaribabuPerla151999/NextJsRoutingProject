import React from 'react';
import classes from "./resultError.module.css";
import Button from '../ui/button';

function ResultError(props) {
    const{children} = props
  return (
    <>
    <div className={classes.resultContainer}>
    <div>
        {children}
    </div>
    <Button link="/">
        Home
    </Button>
    </div>
    </>
  )
}

export default ResultError
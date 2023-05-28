import React from 'react';
import Button from '../ui/button';
import classes from "./eventSearch.module.css";
import { useRef } from 'react';

function EventSearch(props) {
    const {onSearch} = props

    const yearInputRef=useRef()
    const monthInputRef=useRef()

    const submitHandler=(e)=>{
       e.preventDefault()
       const selectedYear=yearInputRef.current.value;
       const selectedMonth=monthInputRef.current.value;
       onSearch && onSearch(selectedYear,selectedMonth)
    }

  return (
    <>
    <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls}>
            <div className={classes.control}>
                <lable htmlFor="year">Year</lable>
                <select id="year" ref={yearInputRef}>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                </select>
            </div>
            <div className={classes.control}>
                <lable htmlFor="month">Year</lable>
                <select id="month" ref={monthInputRef}>
                    <option value="1">Jan</option>
                    <option value="2">Feb</option>
                    <option value="3">Mar</option>
                    <option value="4">Apr</option>
                    <option value="5">May</option>
                    <option value="6">Jun</option>
                    <option value="7">Jul</option>
                    <option value="8">Aug</option>
                    <option value="9">Sep</option>
                    <option value="10">Oct</option>
                    <option value="11">Nov</option>
                    <option value="12">Dec</option>
                </select>
            </div>

        </div>
        <Button>
            Find Events
        </Button>
    </form>
    </>
  )
}

export default EventSearch
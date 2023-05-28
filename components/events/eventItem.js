import React from 'react'
import Link from 'next/link'
import  classes from "./eventItem.module.css";
import Button from '../ui/button';

function eventItem(props) {
   const {title, image, date, location, id} = props;
   const readableDate=new Date(date).toLocaleString("en-US",{
    day   : "numeric",
    month : "long",
    year  : "numeric"
   })

   const formateAddress=location.replace(",","/n")

  return (
    <li className={classes.item}>
      <img src={`/${image}`} alt="" />
      <div className={classes.content}>
        <div className={classes.summary}> 
            <h2>{title}</h2>
            <div className={classes.date}>
                <time>{readableDate}</time>
            </div>
            <div className={classes.address}>
                <address>{formateAddress}</address>
            </div>
        </div>
        <div className={classes.actions}>
            {/* <Link href={`events/${id}`}>Explore</Link> */}
            <Button
               link={`events/${id}`}
            >
             Explore Event   

            </Button>
        </div>
      </div>
    </li>

  )
}

export default eventItem
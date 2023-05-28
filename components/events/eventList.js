import React from "react";
import EventItem from "./eventItem";
import styles from "./eventList.module.css";

function EventList(props) {
  const { items } = props;

  return (
    <ul className={styles.list}>
      {items?.map((item) => (
        <EventItem {...item} />
      ))}
    </ul>
  );
}

export default EventList;

import React from 'react';
import { getAllEvents } from '@/dummy-data';
import EventList from '@/components/events/eventList';
import EventSearch from '@/components/events/eventSearch';
import { useRouter } from 'next/router';


function AllEventsPage() {
  const router=useRouter()
  const events=getAllEvents()
  const eventHandler=(year,month)=>{
     const routepath=`/events/${year}/${month}`;
     router.push(routepath)
  }
  return (
    <>
    <EventSearch onSearch={eventHandler}/>
    <EventList items={events}/>
    </>
  )
}

export default AllEventsPage
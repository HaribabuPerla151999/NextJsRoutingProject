import React from 'react'
import { useRouter } from 'next/router'
import { getEventById } from '@/dummy-data';
import EventSummary from '@/components/event-detail/event-summary';
import EventLogistics from '@/components/event-detail/event-logistics';
import EventContent from '@/components/event-detail/event-content';


function EventDetailsPage() {
  const router=useRouter();
   
  const eventVal = router.query.eventId;
  const event = getEventById(eventVal)
  console.log("eve",event)

  return (
    <>
    <EventSummary title={event?.title}/>
    <EventLogistics
    {...event}
    
    />
    <EventContent>
      <p>{event?.description}</p>
    </EventContent>
    </>
  )
}

export default EventDetailsPage
import React from 'react'
import { useRouter } from 'next/router';
import { getFilteredEvents } from '@/dummy-data';
import EventList from '@/components/events/eventList';
import ResultError from '@/components/events/resultError';


function FilteredEventsPage() {
  const router=useRouter()
  const  filteredData= router.query.slug
  const filteredYear = filteredData?.[0]
  const filteredMonth = filteredData?.[1]

  if(!filteredData){
    return(
      <ResultError>
              <h1>Loading</h1>
      </ResultError>
    
    )
  }

  const numYear = +filteredYear;
  const numMonth = +filteredMonth;
  if(isNaN(numYear)||isNaN(numMonth)|| numYear>2025 || numMonth<=0 || numMonth>12){
    return(
      <ResultError>
      <h1> Please select proper filter data</h1>
      </ResultError>
    ) 
  }
console.log(typeof(numYear),typeof(numMonth))
  const filteredEvents = getFilteredEvents({
     year:numYear,
     month:numMonth
 })

 if(!filteredEvents || filteredEvents?.length == 0){
  return(
  <ResultError>
   <h1>Event Not Found</h1>
   </ResultError>
  )
 }


  return (
    <EventList items={filteredEvents}/>
  )
}

export default FilteredEventsPage
import EventTimeLine from "@/components/EventTimeLine";
import { Event, Events } from "@/database/data"

export default async function Home() {
  const events: Event[] = Events

  return (
    <div className="max-w-7xl w-full mx-auto pt-0 p-5">
      <div className="max-w-md mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Tech Timeline</h1>
        <p>Follow the timeline to discover the pivotal inventions, discoveries, and innovations that have transformed the world we live in today.</p>
      </div>

      <div className="flex flex-col items-center my-10 w-full">
        { events && events?.map((yearEvents, index) => {
          return (
            <div key={`${yearEvents.year}`} className="max-w-xs w-full year">
              <h2 className="text-2xl font-bold relative -left-1">{`${ yearEvents.year }`}</h2>
              <div className="events">
                {
                  yearEvents.events.map((event, index) => {
                    return (
                      <EventTimeLine key={index} event={event} />
                    )
                  })
                }
              </div>
            </div>
          )
        }) }
      </div>
    </div>
  )
}

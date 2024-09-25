import EventsList from "../components/EventsList";
import  DUMMY_EVENTS from "../utils/DUMMY_EVENTS";

const events = DUMMY_EVENTS;

function EventsPage() {
    return (
        <>
            <h1>
            Events Page
        </h1>
            <EventsList events={events} />
        </>

    );
}

export default EventsPage;
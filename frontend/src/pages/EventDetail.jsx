import { useParams } from "react-router-dom";
import DUMMY_EVENTS from "../utils/DUMMY_EVENTS";
import EventItem from "../components/EventItem";

const events = DUMMY_EVENTS;

function EventDetail() {
    const { id } = useParams();

    const currentEvent = events.find((event) => event.id === id);

    return (
        <>
            <h1>
                Event Detail Page
            </h1>
            <EventItem event={currentEvent}></EventItem>
        </>
    );
}

export default EventDetail;
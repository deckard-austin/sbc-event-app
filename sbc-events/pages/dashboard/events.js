import Link from 'next/link';
import EventList from '../../components/EventsList';

const Events = props => (
  <EventList>
    <Link href='/'>
      <a>Link to the home page</a>
    </Link>
  </EventList>
);

export default Events;

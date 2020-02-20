import Link from 'next/link';
import NavStyles from '../styles/NavStyles';

const Nav = () => (
  <NavStyles>
    <Link href='/'>
      <a>Home</a>
    </Link>
    <Link href='/dashboard/events'>
      <a>Events</a>
    </Link>
    <Link href='/dashboard/event/create'>
      <a>Create</a>
    </Link>
    <Link href='#'>
      <a>Register</a>
    </Link>
  </NavStyles>
);
export default Nav;

import React, { Component } from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const StyledEventDiv = styled.div`
  .event {
    background: gray;
    border: 1px solid black;
  }
`;

class EventsList extends Component {
  render() {
    return (
      <StyledEventDiv>
        <p>This is the Events List page where it will list events</p>
        <div className='event'> Event Name</div>
        <div className='event'> Event Name</div>
        <div className='event'> Event Name</div>
        <div className='event'> Event Name</div>
        <div className='event'> Event Name</div>

        <Link href='/dashboard/event/create'>
          <a>
            <strong>Create Event Page </strong>
          </a>
        </Link>
      </StyledEventDiv>
    );
  }
}

export default EventsList;

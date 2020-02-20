import React from 'react';
import Form from '../styles/Form';

const Home = props => (
  <div>
    <h1>Please login to register for events.</h1>
    <Form>
      <fieldset>
        <label htmlFor='username'>Username</label>
        <input type='text' placeholder='Username' />
        <label htmlFor='password'>Password</label>
        <input type='password' placeholder='Password' />
        <button type='submit'>Login</button>
      </fieldset>
    </Form>
  </div>
);

export default Home;

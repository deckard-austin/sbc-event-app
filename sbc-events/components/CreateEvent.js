import React, { Component } from 'react';
import Form from '../styles/Form';

class CreateEvent extends Component {
  state = {
    title: '',
    image: '',
    largeImage: '',
    url: '',
    address: '',
    start: '',
    end: '',
    description: '',
    date: '',
    guestLimit: ''
  };

  handleChange = e => {
    const { name, type, value } = e.target;
    const val = type === 'number' ? parseFloat(value) : value;
    this.setState({ [name]: val });
  };

  // Uploading an Image
  uploadFile = async e => {
    console.log('Uploading an image');
    // Save the upload in files const, an array
    const files = e.target.files;
    console.log(files);
    const data = new FormData();
    // Appends the file and an upload preset to the 'data' object (key, value)
    data.append('file', files[0]);
    data.append('upload_preset', 'sbcevents');

    const res = await fetch(
      'https://api.cloudinary.com/v1_1/ds8tvd8mo/image/upload',
      {
        method: 'POST',
        body: data
      }
    );
    const file = await res.json();
    console.log(file);

    this.setState({
      image: file.secure_url,
      largeImage: file.eager[0].secure_url
    });
  };

  render() {
    return (
      <div>
        <p>This page will allow you to create an event</p>

        <Form
          onSubmit={async e => {
            e.preventDefault();
          }}>
          <fieldset>
            <label htmlFor='title'>Event Title</label>
            <input
              type='text'
              id='title'
              name='title'
              placeholder='Event Title'
              required
              value={this.state.title}
              onChange={this.handleChange}
            />
            <label htmlFor='file'>
              Image
              <input
                type='file'
                id='file'
                name='file'
                placeholder='Upload an image'
                required
                onChange={this.uploadFile}
              />
              {/* Preview of the image below */}
              {this.state.image && (
                <img src={this.state.image} alt='Upload Preview' width='200' />
              )}
            </label>
            <label htmlFor='url'>Event URL</label>
            <input
              type='text'
              id='url'
              name='url'
              placeholder='Event URL'
              required
              value={this.state.url}
              onChange={this.handleChange}
            />
            <label htmlFor='address'>Address</label>
            <input
              type='text'
              id='address'
              name='address'
              placeholder='Event Address'
              required
              value={this.state.address}
              onChange={this.handleChange}
            />
            <label htmlFor='start'>Start Time</label>
            <input
              type='datetime-local'
              id='start'
              name='start'
              placeholder='Start Time'
              required
              value={this.state.start}
              onChange={this.handleChange}
            />
            <label htmlFor='end'>End Time</label>
            <input
              type='datetime-local'
              id='end'
              name='end'
              placeholder='End Time'
              required
              value={this.state.end}
              onChange={this.handleChange}
            />
            <label htmlFor='guestLimit'>Guest Limit</label>
            <input
              type='number'
              id='guestLimit'
              name='guestLimit'
              placeholder='Guest Limit'
              required
              value={this.state.guestLimit}
              onChange={this.handleChange}
            />
            <label htmlFor='description'>Description</label>
            <textarea
              type='text'
              id='description'
              name='description'
              placeholder='Event Description'
              required
              value={this.state.description}
              onChange={this.handleChange}
            />
            {/* <label htmlFor='date'>Date</label>
          <input type='text' /> */}
            <button type='submit'>Submit</button>
          </fieldset>
        </Form>
      </div>
    );
  }
}

// TODO: Add this to the edit event field
// {/* <button class='edit' type='submit'>
//               Edit
//             </button> */}
export default CreateEvent;

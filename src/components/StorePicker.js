import React from 'react';
import PropTypes from 'prop-types';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {
  static propTypes = {
    history: PropTypes.object
  }

  myInput = React.createRef();

  goToStore = (event) => { //es6 alternate syntax so you can do without the constructor .bind stuff
    event.preventDefault();
    const storeName = this.myInput.value.value;
    console.log(this.myInput.value.value);
    // pushes current state to the given url, and react router re-renders
    this.props.history.push(`/store/${storeName}`);
  }

  render() {
    return (
      <form className='store-selector' onSubmit={this.goToStore}>
        <h2>Please Enter a Store</h2>
        <input
          type='text'
          ref={this.myInput}
          required
          placeholder='Store Name'
          defaultValue={getFunName()}
        />
        <button type='submit'>Visit Store -></button>
      </form>
    )
  }
}

export default StorePicker;
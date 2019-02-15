import React, { Fragment } from 'react';
import { format } from 'path';

class StorePicker extends React.Component {
  render() {
    return (
      <Fragment>
        <form className="store-selector">
          <h2>Please enter a store</h2>
          <input type="text" required placeholder="Store Name"></input>
          <button type="submit">Visit Store</button>
        </form>
      </Fragment>
    )
  }
}

export default StorePicker;
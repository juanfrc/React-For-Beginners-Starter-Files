import React, { Fragment } from "react";
import { getFunName } from "../helpers";

class StorePicker extends React.Component {
  // option 1 binding
  // constructor() {
  //   super();
  //   this.goToStore = this.goToStore.bind(this);
  // };
  // myInput = React.createRef();

  // goToStore(event) {
  //   event.preventDefault();
  //   console.log(this);
  // }

  // option 2 use it as a property
  myInput = React.createRef();

  goToStore = (event) => {
    // 1. Stop the form from submitting
    event.preventDefault();
    // 2. Get the text from that input
    const storeName = this.myInput.value.value;
    // 3. Change the page to /store/whatever-copy
   this.props.history.push(`/store/${storeName}`)
  }

  render() {
    return (
      <Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          <h2>Please enter a store</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Store Name"
            defaultValue={getFunName()}
          />
          <button type="submit">Visit Store</button>
        </form>
      </Fragment>
    )
  }
}

export default StorePicker;
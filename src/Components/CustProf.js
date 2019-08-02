import React from 'react';
import '../App.css';

class CustProf extends React.Component {
    constructor() {
      super();
      this.state = { user: {} };
      this.onSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
      e.preventDefault();
      var self = this;
      // On submit of the form, send a POST request with the data to the server.
      fetch('/users', { 
          method: 'POST',
          data: {
            name: self.refs.name,
            job: self.refs.job
          }
        })
        .then(function(response) {
          return response.json()
        }).then(function(body) {
          console.log(body);
        });
    }
    render() {
       
      return (
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="Name" ref="name"/>
          <input type="text" placeholder="Job" ref="job"/>
          <input type="submit" />
        </form>
      );
    }
  }

  export default CustProf;
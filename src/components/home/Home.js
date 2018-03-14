import React, { Component } from 'react';
import Helmet from 'react-helmet';

const url = process.env.REACT_APP_SERVICE_URL ;

export default class Home extends Component {
  state = {
    loading: true,
    data: null,
  }

  componentDidMount() {
    this.fetchData()
      .then((data) => {
        this.setState({ data, loading: false });
      })
      .catch((error) => {
        console.error('ERROR!', error);
      });
  }

  fetchData = async () => {
    const response = await fetch(`${url}stats`);
    const data = await response.json();
    return data;
  }

  render() {
    const { data, loading } = this.state;

    if (loading) {
      return (<div>Hleð inn gögnum...</div>);
    }

    const { numTests = 0, averageStudents = 0, min = 0, max = 0, numStudents = 0 } = data.stats || {} ;

    return (
      <div>
        <Helmet title="Forsíða" />
        <dl>
          <dt>Fjöldi prófa</dt>
          <dd>{numTests}</dd>
          <dt>Fjöldi nemenda í öllum prófum</dt>
          <dd>{numStudents}</dd>
          <dt>Meðalfjöldi nemenda í prófi</dt>
          <dd>{averageStudents}</dd>
          <dt>Minnsti fjöldi nemenda í prófi</dt>
          <dd>{min}</dd>
          <dt>Mesti fjöldi nemenda í prófi</dt>
          <dd>{max}</dd>
        </dl>
      </div>
    );
  }
}

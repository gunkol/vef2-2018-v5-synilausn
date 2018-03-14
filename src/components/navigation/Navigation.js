import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

const url = process.env.REACT_APP_SERVICE_URL;

export default class Navigation extends Component {
  state = {
    data: null,
    loading: true,
    error: false,
  }

  async componentDidMount() {
    try {
      const data = await this.fetchData();
      this.setState({ data, loading: false });
    } catch (e) {
      console.error('Error fetching navigation', e);
      this.setState({ error: true, loading: false });
    }
  }

  async fetchData() {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  }

  render() {
    const { data, loading, error } = this.state;

    if (loading) {
      return (<div>Hleð inn sviðum...</div>);
    }

    if (error) {
      return (<div>Villa við að hlaða inn sviðum</div>);
    }

    return (
      <nav>
        <ul>
          {data.schools && data.schools.map((department) => (
            <li key={department.name}>
              <NavLink to={department.link}>{department.name}</NavLink>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
}

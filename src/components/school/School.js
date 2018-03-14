import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { Link } from 'react-router-dom';

import Department from '../department';

const url = process.env.REACT_APP_SERVICE_URL;

export default class Exams extends Component {

  static propTypes = {
    match: PropTypes.shape({
      params: PropTypes.shape({
        school: PropTypes.string,
      }),
    }),
  }

  static defaultProps = {
  }

  state = {
    data: null,
    loading: true,
    visibleDepartment: '',
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

  componentDidUpdate(prevProps, prevState) {
    if (this.props.match.params.school !== prevProps.match.params.school) {
      this.setState({ loading: true });
      this.fetchData()
        .then((data) => {
          this.setState({ data, loading: false });
        })
        .catch((error) => {
          console.error('ERROR!', error);
        });
    }
  }

  fetchData = async () => {
    const {
      match: {
        params: {
          school = '',
        } = {},
      } = {},
    } = this.props;

    const response = await fetch(`${url}${school}`);
    const data = await response.json();
    return data;
  }

  clickHandler = (department) => {
    return (e) => {
      e.preventDefault();

      if (this.state.visibleDepartment === department) {
        this.setState({ visibleDepartment: '' });
      } else {
        this.setState({ visibleDepartment: department });
      }
    }
  }

  render() {
    const { data, loading, visibleDepartment = '' } = this.state;

    if (loading) {
      return (<p>Hleð prófum...</p>);
    }

    const {
      school: {
        name = '',
        departments = [],
      } = {},
    } = data;

    return (
      <div>
        <Helmet title={name} />
        <h2>{name}</h2>
        {departments.map(department => (
          <Department
            key={department.heading}
            name={`${department.heading}`}
            tests={department.tests}
            testsVisible={department.heading === visibleDepartment}
            onClick={this.clickHandler(department.heading)}
          />
        ))}
        <p><Link to="/">Heim</Link></p>
      </div>
    );
  }
}

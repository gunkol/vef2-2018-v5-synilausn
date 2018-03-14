import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Exams extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    testsVisible: PropTypes.bool,
    tests: PropTypes.array,
    onClick: PropTypes.func,
  }

  render() {
    const { name, testsVisible, tests, onClick } = this.props;

    const icon = testsVisible ? '–' : '+';

    return (
      <div>
        <h3>
          <button onClick={onClick}>
            <span>{icon}</span>
            {name}
          </button>
        </h3>
        {testsVisible && (
          <table>
            <thead>
              <tr>
                <th>Auðkenni</th>
                <th>Námskeið</th>
                <th>Fjöldi nemenda</th>
                <th>Dagsetning</th>
              </tr>
            </thead>
            <tbody>
              {tests.map(test => (
                <tr>
                  <td>{test.course}</td>
                  <td>{test.name}</td>
                  <td>{test.students}</td>
                  <td>{test.date}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    );
  }
}

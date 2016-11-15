import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import StandingsTable from './StandingsTable';

class StandingsPage extends Component {
  render() {
    return (
      <div>
        <h3>2016 Standings</h3>
        <StandingsTable standings={this.props.standings}/>
      </div>
    );
  }
}

StandingsPage.propTypes = {
  standings: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    standings: state.standings
  };
}

export default connect(mapStateToProps)(StandingsPage);

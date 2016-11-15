import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as resultActions from '../../actions/resultActions';
import ManageResultsForm from '../manageResultsForm/ManageResultsForm';

export class ManageResultsPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      result: Object.assign({}, this.props.result),
      errors: {},
      saving: false
    };

    this.updateState = this.updateState.bind(this);
    this.createResult = this.createResult.bind(this);
  }

  courseFormIsValid() {
    let formIsValid = true;
    let errors = {};

    if (this.state.result.name.length < 1) {
      errors.name = 'This field is required.';
      formIsValid = false;
    }

    this.setState({errors: errors});
    return formIsValid;
  }

  createResult(event) {
    event.preventDefault();

    if (!this.courseFormIsValid()) {
      return;
    }

    this.setState({saving: true});
    this.props.actions.createResult(this.state.result)
      .then(() => this.redirect())
      .catch(error => {
        this.setState({saving: false});
      });
  }

  redirect() {
    this.setState({saving: false});
    this.context.router.push('/results');
  }

  updateState(event) {
    const field = event.target.name;
    let result = this.state.result;
    if (field === "driver" || field === "team" || field === "fastestLap" || field === "raceTime" ) {
      result["winner"][field] = event.target.value;
    } else {
      result[field] = event.target.value;
    }
    return this.setState({result: result});
  }

  render() {
    return (
      <ManageResultsForm
        result={this.state.result}
        onChange={this.updateState}
        onSave={this.createResult}
        errors={this.state.errors}
        saving={this.state.saving}
      />
    );
  }
}

ManageResultsPage.propTypes = {
  result: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

//Pull in the React Router context so router is available on this.context.router.
ManageResultsPage.contextTypes = {
  router: PropTypes.object
};

function mapStateToProps(state, ownProps) {
  let result = {
    name: "",
    date: "",
    venue: "",
    winner: {
      driver: "",
      team: "",
      fastestLap: "",
      raceTime: ""
    }
  };

  return {
    result: result
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(resultActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageResultsPage);

import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import ResultCard from './ResultCard';
import * as resultActions from '../../actions/resultActions';

const style = {
  margin: 0,
  top: 'auto',
  right: 20,
  bottom: 20,
  left: 'auto',
  position: 'fixed',
};

class ResultsPage extends Component {
  constructor(props, context) {
    super(props, context);

    this.redirectAddResult = this.redirectAddResult.bind(this);
  }

  redirectAddResult() {
    browserHistory.push('/addResult');
  }

  render() {
    return (
      <div>
        <h3>2016 Results</h3>
        {this.props.results.map(result =>
          <ResultCard key={result.id} result={result}/>
        )}
        <FloatingActionButton secondary={true} style={style} onClick={this.redirectAddResult}>
          <ContentAdd />
        </FloatingActionButton>
      </div>
    );
  }
}

ResultsPage.propTypes = {
  actions: PropTypes.object.isRequired,
  results: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    results: state.results
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(resultActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ResultsPage);

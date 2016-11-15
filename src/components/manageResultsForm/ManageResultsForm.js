import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const ManageResultsForm = ({result, onSave, onChange, saving, errors}) => {
  return (
    <form>
      <h3>Add new result</h3>
      <TextField
        name="name"
        hintText="ex. British Grand Prix"
        floatingLabelText="Race Name"
        onChange={onChange}
        errorText={errors.name}/>
      <br />
      <TextField
        name="date"
        hintText="yyy-mm-dd"
        floatingLabelText="Race Date"
        onChange={onChange}
        errorText={errors.date}/>
      <br />
      <TextField
        name="venue"
        floatingLabelText="Venue"
        onChange={onChange}
        errorText={errors.venue}/>
      <br />
      <TextField
        name="driver"
        floatingLabelText="Winner"
        onChange={onChange}
        errorText={errors.winner}/>
      <br />
      <TextField
        name="team"
        floatingLabelText="Team"
        onChange={onChange}
        errorText={errors.team}/>
      <br />
      <TextField
        name="fastestLap"
        floatingLabelText="Fastest Lap"
        onChange={onChange}
        errorText={errors.fastestLap}/>
      <br />
      <TextField
        name="raceTime"
        floatingLabelText="Race Time"
        onChange={onChange}
        errorText={errors.raceTime}/>
      <br />
      <RaisedButton label={saving ? 'Submitting...' : 'Submit'} primary={true} disabled={saving} onClick={onSave}/>
    </form>
  );
};

ManageResultsForm.propTypes = {
  result: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default ManageResultsForm;

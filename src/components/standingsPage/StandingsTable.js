import React, {PropTypes} from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table';

const StandingsTable = ({standings}) => {
  let rank = 1;

  return (
    <Table>
      <TableHeader
        displaySelectAll={false}
        adjustForCheckbox={false}
      >
        <TableRow>
          <TableHeaderColumn style={{ width: '10%' }}></TableHeaderColumn>
          <TableHeaderColumn style={{ width: '35%' }}>Driver</TableHeaderColumn>
          <TableHeaderColumn style={{ width: '25%' }}>Team</TableHeaderColumn>
          <TableHeaderColumn style={{ width: '10%' }}>Wins</TableHeaderColumn>
          <TableHeaderColumn style={{ width: '15%' }}>Points</TableHeaderColumn>
        </TableRow>
      </TableHeader>
      <TableBody
        displayRowCheckbox={false}
        showRowHover={true}
      >
      {standings.map(driver =>
        <TableRow key={driver.id} selectable={false}>
          <TableRowColumn style={{ width: '10%' }}>{rank++}</TableRowColumn>
          <TableRowColumn style={{ width: '35%' }}>{driver.name}</TableRowColumn>
          <TableRowColumn style={{ width: '25%' }}>{driver.team}</TableRowColumn>
          <TableRowColumn style={{ width: '10%' }}>{driver.wins}</TableRowColumn>
          <TableRowColumn style={{ width: '15%' }}>{driver.points}</TableRowColumn>
        </TableRow>
      )}
      </TableBody>
    </Table>
  );
}

StandingsTable.propTypes = {
  standings: PropTypes.array.isRequired
};

export default StandingsTable;

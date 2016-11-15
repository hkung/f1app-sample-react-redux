import React, {PropTypes} from 'react';
import {Card, CardHeader, CardTitle, CardText} from 'material-ui/Card';

const ResultCard = ({result}) => {
  return (
    <Card>
       <CardHeader
         title={result.name}
         subtitle={result.venue}
         actAsExpander={true}
         showExpandableButton={true}
       />
       <CardText>
        {result.date}
       </CardText>
       <CardTitle title={result.winner.driver} subtitle={result.winner.team} expandable={true} />
       <CardText expandable={true}>
         Fastest Lap: {result.winner.fastestLap} | 
         Race Time: {result.winner.raceTime}
       </CardText>
     </Card>
  );
}

ResultCard.propTypes = {
  result: PropTypes.object.isRequired
};

export default ResultCard;

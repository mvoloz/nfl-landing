import React from 'react';
import Image from 'react-bootstrap/Image';

const displayName = 'FormerTeamsTableRows';

const FormerTeamsTableRows = ({ formerTeams }) => {
  return formerTeams.map((team) => (
    <tr key={team.idFormerTeam}>
      <td>
        <Image src={team.strTeamBadge} width={40} />
      </td>
      <td>{team.strFormerTeam}</td>
      <td>{`${team.strJoined}-${team.strDeparted}`}</td>
    </tr>
  ));
};

FormerTeamsTableRows.displayName = displayName;

export default FormerTeamsTableRows;

import React from 'react';
import Table from 'react-bootstrap/Table';
import FormerTeamsTableRows from './former-team-table-rows';
import NoFormerTeams from './no-former-teams';

const displayName = 'PlayerFormerTeams';

const PlayerFormerTeams = ({ formerTeams }) => {
  return (
    <Table responsive bordered>
      <tbody>
        {formerTeams.length ? (
          <FormerTeamsTableRows formerTeams={formerTeams} />
        ) : (
          <NoFormerTeams />
        )}
      </tbody>
    </Table>
  );
};

PlayerFormerTeams.displayName = displayName;

export default PlayerFormerTeams;

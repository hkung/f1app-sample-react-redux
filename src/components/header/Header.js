import React from 'react';
import AppBar from 'material-ui/AppBar';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import {Link} from 'react-router';

const Header = () => {
  return (
    <AppBar
      title="Formula 1 App"
      showMenuIconButton={false}
      iconElementRight={
        <IconMenu
          iconButtonElement={<IconButton><MoreVertIcon /></IconButton>}
          anchorOrigin={{horizontal: 'right', vertical: 'top'}}
          targetOrigin={{horizontal: 'right', vertical: 'top'}}
        >
          <MenuItem primaryText="Home" containerElement={<Link to="/" />} />
          <MenuItem primaryText="Results" containerElement={<Link to="/results" />} />
        </IconMenu>
      }
    />
  );
};

export default Header;

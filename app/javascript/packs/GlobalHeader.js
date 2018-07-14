import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

const GlobalHeader = props => {
  return(
    <div className="global-header">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="title" color="inherit">
            MyNote
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default GlobalHeader

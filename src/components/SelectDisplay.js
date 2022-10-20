import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { bindActionCreators } from "redux";
import { actionCreators } from "../state/index";

import { TextField, MenuItem, Button, Grid, CircularProgress, Typography } from "@mui/material";

const SelectDisplay = () => {
    
  const account = useSelector((state) => state.account);

  const displaySelected = useSelector((state) => state.displaySelected);

  const displaysLoading = useSelector((state) => state.displaysLoading);

  const displaysOwned = useSelector((state) => state.displaysOwned);

  const dispatch = useDispatch();

  const { setDisplaySelected, setDisplayView } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const handleChange = (event) => {
    setDisplaySelected(event.target.value);
  };

  const getMenuItem = (key) => {
    return (
      <MenuItem value={key} key={key}>
        {key}
      </MenuItem>
    );
  };

  const handleDisplayGrid = () => {
    if (displaySelected) {
      setDisplayView(true);
    }
  };

  if(account === ""){
    return (
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
        marginTop={5}
      >
        <Typography variant="h5">Connect Wallet</Typography>
      </Grid>
    );
  }
  else if (account !== "" && displaysOwned.length > 0) {
    return (
      <Grid
        alignItems="center"
        justifyContent="center"
        minWidth={"200px"}
      >
        <Grid item xs={12}>
          <TextField
            label="Display Id"
            select
            value={displaySelected}
            onChange={handleChange}
            fullWidth

          >
            {displaysOwned.map((key) => getMenuItem(key))}
          </TextField>
        </Grid>
        <br/>
        <Grid item xs={12}>
          <Button fullWidth variant="contained" onClick={handleDisplayGrid}>
            Submit
          </Button>
        </Grid>
      </Grid>
    );
  } else if(displaysLoading === true){
    <CircularProgress/>
  }
  else{
    return (
      <Grid
      container
      direction="column"
      alignItems="center"
      justifyContent="center"
      marginTop={5}
    >
      <Typography variant="h5">No Displays Owned</Typography>
    </Grid>
    );
  }
};

export default SelectDisplay;

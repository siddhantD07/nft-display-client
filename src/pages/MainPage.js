import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

import { CHAIN_ID } from "../config";
import SelectDisplay from "../components/SelectDisplay";
import QRDisplay from "../components/QRDisplay";
import { Grid } from "@mui/material";

function App() {
  const displaySelected = useSelector((state) => state.displaySelected);

  const chainId = useSelector((state) => state.chainId);

  const account = useSelector((state) => state.account);

  const displayView = useSelector((state) => state.displayView);

  if (chainId == null) {
    return null;
  } else if (chainId !== CHAIN_ID) {
    return (
      <Grid
        container
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item xs={12}>
          Wrong Chain Selected
        </Grid>
      </Grid>
    );
  } else {
    return (
      <>
        <Grid
          container
          direction="column"
          alignItems="center"
          justifyContent="center"
          marginTop={2}
        >
          {displayView ? <QRDisplay /> : <SelectDisplay />}
        </Grid>
      </>
    );
  }
}

export default App;

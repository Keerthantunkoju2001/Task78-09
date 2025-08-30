import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function OutlinedButtons() {
  return (
    <>
      <h1>Outlined buttons</h1>
      <Stack className="box col-md-5" direction="row" spacing={2}>
        <Button variant="outlined">Primary</Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" href="#outlined-buttons">
          Link
        </Button>
      </Stack>
    </>
  );
}

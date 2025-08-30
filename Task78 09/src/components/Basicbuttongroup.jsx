import * as React from "react";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

export default function BasicButtonGroup() {
  return (
    <>
      <h1>Basic Button Group</h1>
      <ButtonGroup
        className="box1 col-md-3"
        variant="contained"
        aria-label="Basic button group"
      >
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </>
  );
}

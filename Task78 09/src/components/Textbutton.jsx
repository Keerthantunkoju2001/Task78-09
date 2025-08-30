import * as React from "react";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function TextButtons() {
  return (
    <>
      <h1>Text Buttons</h1>
      <Stack className="box col-md-5" direction="row" spacing={2}>
        <Button>Primary</Button>
        <Button disabled>Disabled</Button>
        <Button href="#text-buttons">Link</Button>
      </Stack>
    </>
  );
}

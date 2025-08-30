import * as React from "react";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Badge, { badgeClasses } from "@mui/material/Badge";
import Button from "@mui/material/Button";
import SaveIcon from "@mui/icons-material/Save";
import Stack from "@mui/material/Stack";

export default function LoadingIconButton() {
  const [loading, setLoading] = React.useState(false);
  React.useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
    return () => clearTimeout(timeout);
  });
  const CartBadge = styled(Badge)`
    & .${badgeClasses.badge} {
      top: -12px;
      right: -6px;
    }
  `;

  return (
    <>
      <h1>Loading Icon Button</h1>
      <div className="box col-md-5">
        <Tooltip title="Click to see loading">
          <IconButton onClick={() => setLoading(true)} loading={loading}>
            <ShoppingCartIcon />
          </IconButton>
        </Tooltip>
        <IconButton>
          <ShoppingCartIcon fontSize="small" />
          <CartBadge badgeContent={2} color="primary" overlap="circular" />
        </IconButton>
      </div>
      <br/>
      <div className="box col-md-5">
        <Stack spacing={2}>
          <Stack direction="row" spacing={2}>
            <Button loading variant="outlined">
              Submit
            </Button>
            <Button loading loadingIndicator="Loading…" variant="outlined">
              Fetch data
            </Button>
            <Button
              loading
              loadingPosition="start"
              startIcon={<SaveIcon />}
              variant="outlined"
            >
              Save
            </Button>
          </Stack>
          <Button
            fullWidth
            loading
            loadingPosition="start"
            startIcon={<SaveIcon />}
            variant="outlined"
          >
            Full width
          </Button>
          <Button
            fullWidth
            loading
            loadingPosition="end"
            endIcon={<SaveIcon />}
            variant="outlined"
          >
            Full width
          </Button>
          <Stack direction="row" spacing={2}>
            <Button loading variant="outlined" loadingPosition="start">
              Submit
            </Button>
            <Button loading variant="outlined" loadingPosition="end">
              Submit
            </Button>
            <Button
              loading
              variant="outlined"
              loadingPosition="end"
              startIcon={<SaveIcon />}
            >
              Save
            </Button>
          </Stack>
        </Stack>
      </div>
    </>
  );
}

import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";


export default function ImageAvatars() {
  return (
    <div className="App">
      <h1>ImageAvatars</h1>
      <div>
        <Stack direction="row" spacing={2}>
          <Avatar alt="Remy Sharp" src="/Static/Images/avatar1.png" />
          <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
        </Stack>
      </div>
      <div>
        <Stack direction="row" spacing={2}>
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 24, height: 24 }}
          />
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.png" />
          <Avatar
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
            sx={{ width: 56, height: 56 }}
          />
        </Stack>
      </div>
    </div>
  );
}

import { Avatar, Box, Divider, List, ListItem, ListItemAvatar, ListItemText, Typography } from "@mui/material";
import { Fragment } from "react";
import { A } from "../components/A";
import { data } from "../views/Home.mockData";

export function Libraries() {
  return (
    <Box>
      <Typography variant="h5">Libraries</Typography>

      <Typography variant="body1">The app is using the following libraries for the following purposes:</Typography>

      <List>
        {data.map(({ image, lib, link, purpose }, i) => (
          <Fragment key={i}>
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "background.default" }}>
                  <img alt={`${lib} logo`} src={image} style={{ width: "80%" }} />
                </Avatar>
              </ListItemAvatar>

              <ListItemText
                primary={
                  <>
                    <A href={link}>{lib}</A> for {purpose}
                  </>
                }
              />
            </ListItem>

            {i < data.length - 1 && <Divider />}
          </Fragment>
        ))}
      </List>
    </Box>
  );
}

import { Button, Card, Box, CardMedia, CardContent, TextField } from "@mui/material"
import clsx from "clsx";
import { AuthContext } from "../logic/AuthContext";

function LoginForm() {
  const boxClassName = clsx("flex flex-row justify-start h-full");
  const imageUrl = "https://cdn4.buysellads.net/uu/1/126868/1669847230-GitLab_Blue.png"
  const contentClassName = clsx("flex flex-col justify-between items-end h-full ");
  const contentStyling = {"min-width" : "20rem"}


  return (
    <Card>
      <Box className={boxClassName}>
        <CardMedia component="img" image={imageUrl} />
        <CardContent className={contentClassName} sx={contentStyling}>

          <TextField
            id="outlined-password-input"
            label="Password"
            type="password"
            autoComplete="admin password"
          />
          <TextField
            id="outlined-username-input"
            label="Username"
            type="text"
            autoComplete="admin username"
          />

          <Button onClick={e => AuthContext.controller.navigateToDashboard()}>Login</Button>
          
        </CardContent>
      </Box>
    </Card>
  );
}


export default LoginForm
import { Divider, IconButton, Stack } from "@mui/material";
import { GoogleLogo } from "phosphor-react";

export default function AuthSocial() {
  const handleGoogleLogin = async () => {};
  // Todo Implement Google login logic here
  return (
    <div>
      <Divider
        sx={{
          my: 2.5,
          typography: "overline",
          color: "text.disabled",
          "&::before, ::after": {
            borderTopStyle: "dashed",
          },
        }}
      >
        OR
      </Divider>

      <Stack direction="row" justifyContent="center" spacing={2}>
        <IconButton onClick={handleGoogleLogin}>
          <GoogleLogo color="#DF3E30" size={32} weight="bold" />
        </IconButton>
      </Stack>
    </div>
  );
}

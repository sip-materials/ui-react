import { HTMLAttributes, ReactNode, useState } from "react"
import { AmiJamLogo } from "./logo";
import { AppBar, Avatar, Box, Container, IconButton, Menu, MenuItem, Stack, Toolbar, Typography } from "@mui/material";

export interface HeaderProps extends HTMLAttributes<HTMLElement> {
  menuElements?: ReactNode[];
  user: {
    userId: string;
    avatar: string;
    nickname: string;
  }
}

export const AmiJamHeader = (props: HeaderProps) => {
  const { menuElements, user } = props;
  const [anchorEl, setAnchorEl] = useState<(EventTarget & HTMLButtonElement) | null>(null);
  const handleMenuClose = () => setAnchorEl(null);
  return (
    <AppBar position="static" sx={{ backgroundColor: "black", boxShadow: "none" }}>
      <Container>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left Logo */}
          <AmiJamLogo />

          {/* Center Navigation */}
          <Stack direction="row" spacing={2} sx={{ flexGrow: 1, justifyContent: "center" }}>
            {(menuElements ?? []).map((item, index) => (
              <Typography key={index} variant="body1">{item}</Typography>
            ))}
          </Stack>

          {/* Right Profile Avatar */}
          <Box>
            <IconButton onClick={(e) => setAnchorEl(e.currentTarget)}>
              <Avatar src={user.avatar} alt={user.nickname} />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
              <MenuItem onClick={handleMenuClose}>Sign Out</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
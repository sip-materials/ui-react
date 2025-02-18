import { AppBar, Container, Stack, Toolbar, Typography } from "@mui/material";

interface FooterProps {
  footerLinks: string[];
  socialLinks: string[];
}

export const AmiJamFooter = (props: FooterProps) => {
  const { footerLinks, socialLinks } = props;
  return (
    <AppBar component="footer" position="static" sx={{ backgroundColor: "black", boxShadow: "none", marginTop: "auto" }}>
      <Container>
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* Left Logo */}
          <Typography variant="h6" sx={{ fontWeight: "bold", background: "linear-gradient(90deg, #FF6600, #FF00FF)", WebkitBackgroundClip: "text", color: "transparent" }}>
            AMIJAM
          </Typography>

          {/* Center Navigation */}
          <Stack direction="row" spacing={2} sx={{ flexGrow: 1, justifyContent: "center" }}>
            {footerLinks.map((item, index) => (
              <Typography key={index} variant="body1">{item}</Typography>
            ))}
          </Stack>

          {/* Right Social Links */}
          <Stack direction="row" spacing={2}>
            {socialLinks.map((item, index) => (
              <Typography key={index} variant="body1">{item}</Typography>
            ))}
          </Stack>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
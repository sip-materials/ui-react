import { Avatar, Card, CardContent, Typography, Button, Stack } from "@mui/material";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import SettingsIcon from "@mui/icons-material/Settings";

interface ProfileCardProps {
  name: string;
  location: string;
  genres: string[];
  instrument: string;
  skillLevel: string;
  activityFrequency: string;
  performanceClips: boolean;
  professionalLevel: string;
  avatar: string;
  matchPercentage: number;
}

export const AmiJamProfileCard = (props: ProfileCardProps) => {
  const { name, location, genres, instrument, skillLevel, activityFrequency, performanceClips, professionalLevel, avatar, matchPercentage } = props;
  return (
    <Card sx={{ backgroundColor: "#222", color: "#fff", borderRadius: 3, maxWidth: 350 }}>
      <Stack direction="row" justifyContent="space-between" alignItems="center" mb={2}>
        <Stack direction="row" alignItems="center" spacing={1}>
          {/* <FavoriteBorderIcon /> */}
          <Typography variant="body2">5K likes</Typography>
        </Stack>
        <Button variant="contained" sx={{ background: "linear-gradient(90deg, #FF6600, #FF00FF)", color: "#fff" }}>
          Message
        </Button>
      </Stack>
      <Stack alignItems="center" spacing={1}>
        <Avatar src={avatar} sx={{ width: 80, height: 80 }} />
        <Typography variant="body2" color="error">{matchPercentage}% Match</Typography>
        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography variant="h6" fontWeight="bold">{name}</Typography>
          {/* <SettingsIcon fontSize="small" /> */}
        </Stack>
      </Stack>
      <CardContent>
        <Typography variant="body2"><strong>Location:</strong> {location}</Typography>
        <Typography variant="body2"><strong>Music Genre:</strong> {genres.join(', ')}</Typography>
        <Typography variant="body2"><strong>Instrument/Skill:</strong> {instrument}</Typography>
        <Typography variant="body2"><strong>Skill Level:</strong> {skillLevel}</Typography>
        <Typography variant="body2"><strong>Activity Frequency:</strong> Playing {activityFrequency}</Typography>
        <Typography variant="body2"><strong>Performance Clips:</strong> {performanceClips ? "Available" : "Unavailable"}</Typography>
        <Typography variant="body2"><strong>Professional Level:</strong> {professionalLevel}</Typography>
      </CardContent>
    </Card>
  );
}

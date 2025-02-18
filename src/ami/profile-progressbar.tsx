import { LinearProgress } from "@mui/material";

interface ProfileProgressbar {
  percent: number;
}

export const AmiJamProfileProgressbar = (props: ProfileProgressbar) => {
  return (
    <div>
      Profile Completion {props.percent}
      <LinearProgress value={props.percent} />
      You'll get accurate match the more you fill in
      <button>Complete Profile</button>
    </div>
  )
}
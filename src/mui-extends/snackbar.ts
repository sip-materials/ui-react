import { SnackbarOrigin } from "@mui/material";
import { ReactNode } from "react";

export const emptySnackbar: SnackbarOrigin & {
  open: boolean;
  message: ReactNode;
} = {
  open: false,
  vertical: 'top',
  horizontal: 'center',
  message: ''
}

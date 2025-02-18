import { SnackbarOrigin } from "@mui/material";
import { ReactNode } from "react";
export declare const emptySnackbar: SnackbarOrigin & {
    open: boolean;
    message: ReactNode;
};

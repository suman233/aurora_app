import { borderRadius } from "@/themes/themeConstant";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import { useTheme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";

interface MuiModalWrapperProps {
  open: boolean;
  onClose?: () => void;
  scroll?: "paper" | "body";
  children: JSX.Element | JSX.Element[];
  title: string;
  className?: string;
}

export default function MuiModalWrapper({
  open,
  onClose,
  scroll,
  children,
  title,
  className
}: MuiModalWrapperProps) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Dialog
      open={open}
      onClose={onClose}
      scroll={scroll}
      aria-labelledby="responsive-dialog-title"
      PaperProps={{
        style: {
          borderRadius
        }
      }}
      className={className}
    >
      <Box>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography>{title}</Typography>
          <IconButton onClick={onClose} autoFocus>
            <CloseIcon />
          </IconButton>
        </Stack>
      </Box>

      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

import { CssBaseline, Typography } from "@mui/material"
import { createRoot } from "react-dom/client"
import RequestFormDemo from "./demo/RequestFormDemo"

const rootElement = document.getElementById("root")

if (!rootElement) {
  throw new Error("root element not found")
}

createRoot(rootElement).render(
  <>
    <CssBaseline />
    <Typography variant="h5" sx={{ p: 3, pb: 0 }}>
      Controlled Form Demo
    </Typography>
    <Typography variant="body2" color="text.secondary" sx={{ px: 3, pb: 2 }}>
      React Hook Form + MUI Controlled 입력 패턴 샘플
    </Typography>
    <RequestFormDemo />
  </>,
)

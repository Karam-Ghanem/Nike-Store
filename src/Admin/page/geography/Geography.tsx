
import Geo from "./geo";
import Header from "../../components/Header";
import { Box } from "@mui/material";

const Geography = () => {
  // const theme = useTheme();
  return (
    <Box>
      <Header isDashboard={true} title="Geography" subTitle="Simple Geography Chart" />

      <Geo />
    </Box>
  );
};

export default Geography;

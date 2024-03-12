import { useState } from "react";
import { Link } from "react-router-dom";
import { Box, Typography, useTheme } from "@mui/material";
import PixIcon from "@mui/icons-material/Pix";

import { FlexBetween } from "@/components";
import { GLOBAL_CONSTANTS } from "@/constants/global";

import "./styles.css";

type SceneKey = keyof (typeof GLOBAL_CONSTANTS)["SCENES"];

const NavBar = () => {
  const { palette } = useTheme();
  const [selected, setSelected] = useState<SceneKey>(
    GLOBAL_CONSTANTS.SCENES.DASHBOARD.NAME as SceneKey
  );

  return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
      <FlexBetween gap="0.75rem">
        <PixIcon
          sx={{
            fontSize: "28px",
          }}
        />
        <Typography variant="h4" fontSize="16px">
          {GLOBAL_CONSTANTS.TITLE_FINANCE_APP}
        </Typography>
      </FlexBetween>

      <FlexBetween gap="2rem">
        {Object.values(GLOBAL_CONSTANTS.SCENES).map((scene) => (
          <Box key={scene.NAME}>
            <Link
              to={GLOBAL_CONSTANTS.APP_URL[scene.NAME as SceneKey]}
              onClick={() => setSelected(scene.NAME as SceneKey)}
              style={{
                color: selected === scene.NAME ? "inherit" : palette.grey[700],
              }}
              className="nav-link"
            >
              {scene.LABEL}
            </Link>
          </Box>
        ))}
      </FlexBetween>
    </FlexBetween>
  );
};

export default NavBar;

import { hexToRGBA } from "@/@core/utils/hex-to-rgba";
import { Box, Button } from "@mui/material";

const CreateEventHeader = () => {
  return (
    <>
      <Box
        sx={{
          display: { xs: "none", md: "flex" },
          width: "100%",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 25px",
          position: "fixed",
          top: "0",
          zIndex: "66",
          background: "rgba( 21, 22, 24, 0.45 )",
          boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
          backdropFilter: "blur( 4px )",
        }}
      >
        <Box>
          <Button
            variant="tonal"
            sx={{
              backgroundColor: "customColors.primaryDark2",
              padding: "9px 25px",
              borderRadius: "15px",
            }}
          >
            Exit Event Creator
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "40%",
            justifyContent: "space-between",
          }}
        >
          <Box
            sx={{
              width: "30%",
              backgroundColor: "primary.main",
              height: "15px",
              borderRadius: "5px",
            }}
          ></Box>
          <Box
            sx={{
              width: "30%",
              backgroundColor: "customColors.primaryDark2",
              height: "15px",
              borderRadius: "5px",
            }}
          ></Box>
          <Box
            sx={{
              width: "30%",
              backgroundColor: "customColors.primaryDark2",
              height: "15px",
              borderRadius: "5px",
            }}
          ></Box>
        </Box>
        <Box>
          <Button
            variant="tonal"
            sx={{
              backgroundColor: "customColors.primaryDark2",
              padding: "9px 25px",
              borderRadius: "15px",
            }}
          >
            Create Event
          </Button>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          display: { xs: "flex", md: "none" },
          flexDirection: "column-reverse",
          width: { xs: "100%" },
          justifyContent: "space-between",
          alignItems: "center",
          padding: "10px 25px",
          position: "fixed",
          bottom: "0",
          backgroundColor: hexToRGBA(theme.palette.primary.main, 0.4),
          boxShadow: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
          backdropFilter: "blur(10px)",
        })}
      >
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="tonal"
            sx={{
              backgroundColor: "customColors.primaryDark2",
              padding: "9px 25px",
              borderRadius: "15px",
            }}
          >
            Exit Event Creator
          </Button>
          <Button
            variant="tonal"
            sx={{
              backgroundColor: "customColors.primaryDark2",
              padding: "9px 25px",
              borderRadius: "15px",
            }}
          >
            Create Event
          </Button>
        </Box>
        <Box
          sx={{
            display: "flex",
            width: "60%",
            justifyContent: "space-between",
            margin: "20px 0px",
          }}
        >
          <Box
            sx={{
              width: "30%",
              backgroundColor: "primary.main",
              height: "15px",
              borderRadius: "5px",
            }}
          ></Box>
          <Box
            sx={{
              width: "30%",
              backgroundColor: "customColors.primaryDark2",
              height: "15px",
              borderRadius: "5px",
            }}
          ></Box>
          <Box
            sx={{
              width: "30%",
              backgroundColor: "customColors.primaryDark2",
              height: "15px",
              borderRadius: "5px",
            }}
          ></Box>
        </Box>
      </Box>
    </>
  );
};

export default CreateEventHeader;

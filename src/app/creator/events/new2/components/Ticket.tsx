import { Box, Typography } from "@mui/material";

const EventTicket = () => {
  return (
    <Box
      sx={{
        borderBottom: "1px solid #ff914d",
        padding: "5% 0% 0%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      {/* Tickets left start */}
      <Box>
        <Typography
          variant="h6"
          sx={{
            fontWeight: "bold",
            fontSize: "30px",
            margin: "10px 0px",
            color: "#fff",
          }}
        >
          Tickets
        </Typography>
      </Box>
      {/* Tickets left end */}
      {/* Tickets right start */}
      <Box>
        {/* <Button sx={{background:'#ff914d',padding:'9px 25px',color:'#fff',borderRadius:'35px'}}>Edit Tickets</Button> */}
        {/* <Button
          onClick={handleOpen3}
          sx={{
            padding: "9px 25px",
            color: "#fff",
            borderRadius: "35px",
            background: "rgba( 255, 145, 77, 0.45 )",
            boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
            backdropFilter: "blur( 4px )",
          }}
          variant="contained"
          startIcon={<ArrowOutwardIcon />}
        >
          Edit Tickets
        </Button> */}
      </Box>
      {/* Tickets right end */}
    </Box>
  );
};

export default EventTicket;

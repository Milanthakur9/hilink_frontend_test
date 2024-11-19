import { Box, Typography } from "@mui/material";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Grid from "@mui/material/Grid2";
import CustomTextFieldForRhf from "@/components/textField/CustomTextFieldForRhf";

const schema = yup.object().shape({
  eventName: yup.string().required("Please enter your event name"),
  startTime: yup.string().required(),
  endTime: yup.string().required(),
  venueName: yup.string().required(),
  eventAddress: yup.string().required(),
  email: yup.string().email().optional(),
  phone: yup.string().optional(),
});
interface FormData {
  eventName: string;
  startTime: string;
  endTime: string;
  venueName: string;
  eventAddress: string;
  email: string;
  phone: string;
}

const defaultValues: FormData = {
  eventName: "",
  eventAddress: "",
  startTime: "",
  endTime: "",
  venueName: "",
  email: "",
  phone: "",
};

const EventInfo = () => {
  const {
    control,
    // handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues,
    mode: "onBlur",
    resolver: yupResolver(schema),
  });

  // const onSubmit = async (data: FormData) => {
  //   console.log(data);
  // };

  return (
    <>
      <Typography
        variant="h4"
        sx={{
          fontWeight: "bold",
          fontSize: "20px",
          padding: "5% 0px 10px 0",
          color: "customColors.primaryWhite",
        }}
      >
        Event Details
      </Typography>
      <Box sx={{ width: { md: "48%", xs: "100%" } }}>
        <form
          noValidate
          autoComplete="off"
          // onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={4}>
            <Grid size={{ xs: 12 }}>
              <CustomTextFieldForRhf
                control={control}
                errors={errors}
                label="My Event"
                placeHolder="Enter your event name"
                name="eventName"
              />
            </Grid>
          </Grid>
        </form>
      </Box>
    </>
  );
};

export default EventInfo;

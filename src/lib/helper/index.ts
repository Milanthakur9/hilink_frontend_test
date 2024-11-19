import { isAxiosError } from "axios";
import toast from "react-hot-toast";

export const showAxiosError = (error: unknown) => {
  if (isAxiosError(error)) {
    toast.error(error.response?.data.message);
  }
};

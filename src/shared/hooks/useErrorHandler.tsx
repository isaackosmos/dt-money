import { useSnackBarContext } from "@/context/snackBar.context";
import { AppError } from "../helpers/appError";

export const useErrorHandler = () => {
  const { notify } = useSnackBarContext();

  const handleError = (error: unknown, defaultMessage?: string) => {
    const isAppError = error instanceof AppError;

    const message = isAppError
      ? error.message
      : defaultMessage ?? "Falha na requisição.";

    notify({
      message: message,
      type: "ERROR",
    });
  };

  return {
    handleError,
  };
};

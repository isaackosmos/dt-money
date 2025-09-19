import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";

export type SnackBarMessageType = "ERROR" | "SUCCESS";

interface NotifyMessageParams {
  message: string;
  type: SnackBarMessageType;
}

export type SnackBarContextType = {
  message: string | null;
  type: SnackBarMessageType | null;
  notify: (params: NotifyMessageParams) => void;
};

const SnackBarContext = createContext<SnackBarContextType>(
  {} as SnackBarContextType
);

export const SnackBarContextProvider: FC<PropsWithChildren> = ({
  children,
}) => {
  const [message, setMessage] = useState<string | null>(null);
  const [type, setType] = useState<SnackBarMessageType | null>(null);

  const notify = ({ message, type }: NotifyMessageParams) => {
    setMessage(message);
    setType(type);

    setTimeout(() => {
      setMessage(null);
      setType(null);
    }, 3000);
  };

  return (
    <SnackBarContext.Provider value={{ message, type, notify }}>
      {children}
    </SnackBarContext.Provider>
  );
};

export const useSnackBarContext = () => {
  const context = useContext(SnackBarContext);

  return context;
};

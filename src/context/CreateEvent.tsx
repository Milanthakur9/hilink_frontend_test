import { createContext, ReactNode, useState } from "react";
import { EventInfoDataType } from "./type";

const defaultEventInfo: EventInfoDataType = {
  poster: null,
  eventName: "",
  eventAddress: "",
  startTime: "",
  endTime: "",
  venueName: "",
  phone: "",
  email: "",
};

interface DefaultProviderType {
  eventInfoData: EventInfoDataType;
  setEventInfoData: React.Dispatch<React.SetStateAction<EventInfoDataType>>;
}

const defaultProvider: DefaultProviderType = {
  eventInfoData: defaultEventInfo,
  setEventInfoData: () => null,
};

const CreateEventContext = createContext(defaultProvider);

const CreateEventContextProvider = ({ children }: { children: ReactNode }) => {
  const [eventInfoData, setEventInfoData] =
    useState<EventInfoDataType>(defaultEventInfo);

  const value = {
    eventInfoData,
    setEventInfoData,
  };

  return (
    <CreateEventContext.Provider value={value}>
      {children}
    </CreateEventContext.Provider>
  );
};

export { CreateEventContext, CreateEventContextProvider };

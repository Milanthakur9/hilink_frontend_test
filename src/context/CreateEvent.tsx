import { createContext, ReactNode, useState } from "react";

interface EventInfoDataType {
  eventName: string;
  eventAddress: string;
  startTime: string;
  endTime: string;
  venueName: string;
  phone: string;
  email: string;
}

interface DefaultProviderType {
  eventInfoData: EventInfoDataType | null;
  setEventInfoData: (value: EventInfoDataType | null) => void;
}

const defaultProvider: DefaultProviderType = {
  eventInfoData: null,
  setEventInfoData: () => null,
};

const CreateEventContext = createContext(defaultProvider);

const CreateEventContextProvider = ({ children }: { children: ReactNode }) => {
  const [eventInfoData, setEventInfoData] = useState<EventInfoDataType | null>(
    defaultProvider.eventInfoData
  );

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

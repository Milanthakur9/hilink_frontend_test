import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface OrganizationState {
  id: number;
  name: string;
  biography: string;
  coverPhoto: string;
  profilePhoto: string;
  instagramLink: string;
  twitterLink: string;
  websiteLink: string;
  linkedInLink: string;
  contactEmail: string;
  contactPhoneNo: string;
  type: string;
  createdAt: string;
  updatedAt: string;
}

const initialState: OrganizationState = {
  id: 0,
  name: "",
  biography: "",
  coverPhoto: "",
  profilePhoto: "",
  instagramLink: "",
  twitterLink: "",
  websiteLink: "",
  linkedInLink: "",
  contactEmail: "",
  contactPhoneNo: "",
  type: "",
  createdAt: "",
  updatedAt: "",
};

const organizationSlice = createSlice({
  name: "organization",
  initialState,
  reducers: {
    setOrganization(state, action: PayloadAction<OrganizationState>) {
      return action.payload;
    },
    updateOrganizationField(
      state,
      action: PayloadAction<{ field: keyof OrganizationState; value: string }>
    ) {
      const { field, value } = action.payload;
      state[field] = value;
    },
    resetOrganization() {
      return initialState;
    },
  },
});

export const { setOrganization, updateOrganizationField, resetOrganization } =
  organizationSlice.actions;

export default organizationSlice.reducer;

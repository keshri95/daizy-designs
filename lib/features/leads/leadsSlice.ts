import { Lead } from '@/types/leads';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface LeadsState {
  leads: Lead[];
}

const initialState: LeadsState = {
  leads: [],
};

const leadsSlice = createSlice({
  name: 'leads',
  initialState,
  reducers: {
    setLeads: (state, action: PayloadAction<Lead[]>) => {
      state.leads = action.payload;
    },
    updateLeadStatus: (
      state,
      action: PayloadAction<{ id: string; status: string }>
    ) => {
      const { id, status } = action.payload;
      const lead = state.leads.find((lead) => lead.id === id);
      if (lead) {
        lead.status = status;
      }
    },
  },
});

export const { setLeads, updateLeadStatus } = leadsSlice.actions;
export default leadsSlice.reducer;
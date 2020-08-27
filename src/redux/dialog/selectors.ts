import { RootState } from '..';

export const mesages = (state: RootState) =>
    state.dialogs.messages

export const dialogs = (state: RootState) =>
    state.dialogs.dialogs

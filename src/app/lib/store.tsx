import { configureStore } from '@reduxjs/toolkit';
import companySlice from '@/app/lib/features/company/companySlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      company:companySlice,
    },
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
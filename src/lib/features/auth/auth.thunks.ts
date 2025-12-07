
import { baseURL } from '@/utils/base-url';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const getLoggedInUser = createAsyncThunk('auth/me', async () => {
    const res = await fetch(`${baseURL}/auth/me`, {
        credentials: 'include',
    });
    if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(errorData?.message || `HTTP error! status: ${res.status}`);
    }
    const result = await res.json();
    return result;
});

import { baseURL } from '@/utils/base-url';
import { createAsyncThunk } from '@reduxjs/toolkit';
export const getComments = createAsyncThunk('comments', async () => {
    const res = await fetch(`${baseURL}/comments`, {
        credentials: 'include',
    });
    if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        throw new Error(errorData?.message || `HTTP error! status: ${res.status}`);
    }
    const result = await res.json();
    return result;
});
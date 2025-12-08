
import { baseURL } from '@/utils/base-url';
import { createAsyncThunk } from '@reduxjs/toolkit';
interface GetCommentsParams {
    page?: number;
    limit?: number;
    sort?: string;
}
export const getComments = createAsyncThunk('comments',
    async ({ page = 1, limit = 10, sort = 'newest' }: GetCommentsParams) => {
        const query = new URLSearchParams({
            page: String(page),
            limit: String(limit),
            sort,
        }).toString();
        console.log(query)
        const res = await fetch(`${baseURL}/comments?${query}`, {
            credentials: 'include',
        });
        if (!res.ok) {
            const errorData = await res.json().catch(() => null);
            throw new Error(errorData?.message || `HTTP error! status: ${res.status}`);
        }
        const result = await res.json();
        console.log(result)
        return result;
    });
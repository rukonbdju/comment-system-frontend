export interface user {
    _id: string;
    name: string;
    email: string;
    password: string;
    createdAt: string;
}

export interface AuthState {
    user: user | null;
    isLoading: boolean;
    error: string | null;
}

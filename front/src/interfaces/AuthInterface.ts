export interface AuthContextProviderProps {
    children: React.ReactNode;
}

export interface UserData {
    _id: string;
    token: string;
    message: string;
    // setUser?: React.Dispatch<React.SetStateAction<UserData>>;
}

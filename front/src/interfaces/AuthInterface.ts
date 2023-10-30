export interface AuthContextProviderProps {
    children: React.ReactNode;
}

export type User = {
    _id: string;
    token: string;
    message: string;
};

export interface UserContextInterface {
    user: User;
    setUserData: (user: User) => void;
}

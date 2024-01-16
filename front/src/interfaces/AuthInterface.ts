export interface AuthContextProviderProps {
    children: React.ReactNode;
}

export type User = {
    _id: string;
    token: string;
    name: string;
};

export interface UserContextInterface {
    user: User;
    setUserData: (user: User) => void;
    loading: boolean;
}

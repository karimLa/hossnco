import React from 'react';
import { createContext, useContext, useMemo, useState } from 'react';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';

export interface IUser {
	username: string;
	email: string;
	token: string;
}

interface Context {
	user: IUser | undefined;
	setUser: React.Dispatch<React.SetStateAction<IUser | undefined>>;
	storeUser: (user: IUser) => Promise<void>;
	getUser: () => Promise<IUser | undefined>;
	removeUser: () => Promise<void>;
}

const UserContext = createContext<Context | undefined>(undefined);

export function useUser() {
	const context = useContext(UserContext);

	if (context === undefined) {
		throw new Error('useUser must be used within a UserProvider');
	}

	return context;
}

const UserProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState<IUser>();
	const { getItem, setItem, removeItem } = useAsyncStorage('@user');

	const value = useMemo(
		() => ({
			user,
			setUser,
			storeUser: async (newUser: IUser) => {
				if (!newUser) {
					throw new Error('user can not be undefiend');
				}

				setUser(newUser);

				try {
					await setItem(JSON.stringify(newUser));
				} catch {}
			},
			getUser: async () => {
				try {
					const value = await getItem();

					if (!value) {
						return user;
					}

					return JSON.parse(value) as IUser;
				} catch {
					return user;
				}
			},
			removeUser: async () => {
				setUser(undefined);
				try {
					await removeItem();
				} catch {}
			},
		}),
		[user]
	);

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

export default UserProvider;

import { useEffect, useState } from "react";
import { useUser } from "../context/User";
import { cacheResourcesAsync } from "../utils/cache";

function usePreload() {
	const { user, getUser, setUser } = useUser();
	const [isReady, setIsReady] = useState(false);

	useEffect(() => {
		async function preloadData() {
			// check if we have a user
			const value = await getUser();
			setUser(value);

			// load assets
			await cacheResourcesAsync();
			setIsReady(true);
		}

		preloadData();
	}, []);

	return {user, isReady}
}

export default usePreload;
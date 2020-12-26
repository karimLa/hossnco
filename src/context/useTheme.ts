import { Theme } from "../constants/theme";
import { useTheme as useRestyle } from '@shopify/restyle'

const useTheme = () => {
	return useRestyle<Theme>();
}

export default useTheme
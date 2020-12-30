import { Theme } from "../constants/theme";
import { useTheme as useRestyle } from '@shopify/restyle'

function useTheme() {
	return useRestyle<Theme>();
}

export default useTheme
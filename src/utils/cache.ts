import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { Image } from 'react-native'
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { landingScreenBg } from '../constants/images'

function cacheImages(images: any) {
  return images.map((image: string | number) => {
    if (typeof image === 'string') {
      return Image.prefetch(image);
    } else {
      return Asset.fromModule(image).downloadAsync();
    }
  });
}

function cacheFonts(fonts: any) {
  return fonts.map((font: string) => Font.loadAsync(font));
}

export async function cacheResourcesAsync() {
	const imageAssets = cacheImages([landingScreenBg]);

	const fontAssets = cacheFonts([MaterialCommunityIcons.font, Feather.font]);

	await Promise.all([...imageAssets, ...fontAssets]);
}
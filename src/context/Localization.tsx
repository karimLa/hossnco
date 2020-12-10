import React, { createContext, useMemo, useState } from 'react';
import * as Localization from 'expo-localization';
import i18n from 'i18n-js';
import en from '../i18n/en';
import fr from '../i18n/fr';
import ar from '../i18n/ar';

type tFunc = (scope: i18n.Scope, options?: i18n.TranslateOptions) => string;

interface Context {
	t: tFunc;
	locale: locales;
	setLocale: React.Dispatch<React.SetStateAction<string>>;
}

i18n.translations = {
	en,
	fr,
	ar,
};
i18n.locale = Localization.locale;
i18n.fallbacks = true;

// @ts-ignore
export const LocalizationContext = createContext<Context>({});

const LocalizationContainer: React.FC = ({ children }) => {
	const [locale, setLocale] = useState(Localization.locale);

	const localizationContext = useMemo(
		() => ({
			t: (scope: i18n.Scope, options?: i18n.TranslateOptions) =>
				i18n.t(scope, { locale, ...options }),
			locale,
			setLocale,
		}),
		[locale]
	);

	return (
		<LocalizationContext.Provider value={localizationContext}>
			{children}
		</LocalizationContext.Provider>
	);
};

export default LocalizationContainer;

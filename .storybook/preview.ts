import { Decorator, Parameters, setup } from "@storybook/vue3";
import i18n from "../src/i18n";
import pinia, { useCurrentUserStore } from "../src/pinia";
import { createRouter } from "../src/router";

export const parameters: Parameters = {};

export const decorators: Decorator[] = [
	(story, context) => {
		i18n.global.locale = context.globals.locale;
		return {
			setup() {
				const currentUserStore = useCurrentUserStore();
				currentUserStore.$reset();
			},
			template: "<story />",
		};
	},
];

export const globalTypes = {
	locale: {
		name: "Locale",
		description: "多言語対応",
		defaultValue: "ja",
		toolbar: {
			icon: "globe",
			items: [
				{ value: "ja", right: "🇯🇵", title: "Japanese" },
				{ value: "en", right: "🇺🇸", title: "English" },
			],
		},
	},
};

const router = createRouter("memory");

setup((app) => {
	if (!app.__VUE_I18N__) {
		app.use(i18n);
		app.use(pinia);
		app.use(router);
	}
});

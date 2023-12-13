// cSpell:word viewports
import MyPage from "./MyPage.page.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

type Story = StoryObj<typeof MyPage>;

const meta: Meta<typeof MyPage> = {
	title: "Page/MyPage",
	component: MyPage,
	render: () => ({
		components: { MyPage },
		template: "<MyPage />",
	}),
	parameters: {
		viewport: {
			viewports: {
				pc: {
					name: "Min PC Layout",
					styles: {
						width: "992px",
						height: "100%",
					},
				},
				mobile: {
					name: "Min Mobile Layout",
					styles: {
						width: "375px",
						height: "100%",
					},
				},
			},
		},
	},
};

export const ForPc: Story = {
	parameters: {
		viewport: {
			defaultViewport: "pc",
		},
	},
};
export const ForMobile: Story = {
	parameters: {
		viewport: {
			defaultViewport: "mobile",
		},
	},
};

export default meta;

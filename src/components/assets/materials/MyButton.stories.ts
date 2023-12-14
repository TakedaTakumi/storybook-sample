import MyButton from "./MyButton.material.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

type Story = StoryObj<typeof MyButton>;

const meta: Meta<typeof MyButton> = {
	title: "Assets/Material/MyButton",
	component: MyButton,
	render: (args) => ({
		components: { MyButton },
		setup() {
			return { args };
		},
		template: "<MyButton v-bind='args' />",
	}),
	args: {
		label: "ボタン",
		variant: "primary",
		size: "medium",
	},
	argTypes: {
		variant: {
			control: {
				type: "inline-radio",
			},
			options: ["primary", "secondary"],
		},
		size: {
			control: {
				type: "select",
			},
			options: ["small", "medium", "large"],
		},
	},
	parameters: {
		backgrounds: {
			default: "twitter",
			values: [
				{
					name: "twitter",
					value: "#00aced",
				},
				{
					name: "facebook",
					value: "#3b5998",
				},
			],
		},
	},
};

export const Default: Story = {
	args: {
		label: "ボタン",
		variant: "primary",
		size: "medium",
	},
	parameters: {
		backgrounds: {
			default: "twitter",
		},
	},
};

export const Login: Story = {
	args: {
		label: "ログイン",
	},
};

export const SignUp: Story = {
	args: {
		label: "会員登録",
	},
};

export default meta;

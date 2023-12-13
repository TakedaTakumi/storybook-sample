import MyHeader from "./MyHeader.material.vue";
import type { Meta, StoryObj } from "@storybook/vue3";

type Story = StoryObj<typeof MyHeader>;

const meta: Meta<typeof MyHeader> = {
	title: "Assets/Material/MyHeader",
	component: MyHeader,
	render: (args) => ({
		components: { MyHeader },
		setup() {
			return { args };
		},
		template: "<MyHeader v-bind='args' />",
	}),
	argTypes: {
		onLogin: { action: "onLogin" },
		onLogout: { action: "onLogout" },
		onSignUp: { action: "onSignUp" },
	},
};

export const Login: Story = {
	args: {
		isLoggedIn: true,
	},
};

export const Logout: Story = {
	args: {
		isLoggedIn: false,
	},
};

export default meta;

import { children } from "solid-js";

interface ButtonPros {
	text?: string;
	type?: "submit" | "reset" | "button";
	style?: Record<string, string>;
	onClick?: (event: MouseEvent) => void;
  children?: any;
	classList?: string;
}

const Button = ({ text, type, style, onClick, children, classList }: ButtonPros) => {
	return (
		<button
			class={`p-2 border rounded ${classList}`}
			onClick={onClick}
			type={type}
			style={{ ...style }}
		>
			{children}
			{text}
		</button>
	);
};

export default Button;

import { type ButtonProps } from "@/interfaces";

const Button = ({ children, onClick, shape, size }: ButtonProps) => {
  const sizeClasses = {
    small: "px-2 py-1 text-sm",
    medium: "px-4 py-2 text-md",
    large: "px-6 py-3 text-lg",
  };

  return (
    <button
      onClick={onClick}
      className={`bg-blue-500 text-white font-semibold hover:bg-blue-600 ${sizeClasses[size]} ${shape} transition`}
    >
      {children}
    </button>
  );
};
export default Button;

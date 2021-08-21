interface ButtonProps {
  children: string | JSX.Element;
  onClick: () => void;
}

function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className="bg-white hover:bg-gray-300 border border-gray-500 hover:border-transparent text-black font-semibold py-2 px-4 rounded"
    >
      {children}
    </button>
  );
}

export default Button;

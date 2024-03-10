function Button({ children, onClick, className }:
                    { children?: React.ReactNode, onClick?: React.MouseEventHandler, className?: string }) {
    return (
        <button
            className={`p-2 mx-3 border-2 rounded-xl ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;

interface ButtonProps {
    children?: React.ReactNode,
    onClick?: React.MouseEventHandler,
    onMouseEnter?: React.MouseEventHandler,
    onMouseLeave?: React.MouseEventHandler,
    className?: string
}

function Button({ children, onClick, onMouseEnter, onMouseLeave, className }: ButtonProps) {
    return (
        <button
            className={`p-2 mx-3 border-2 rounded-xl ${className}`}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

export default Button;

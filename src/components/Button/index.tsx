type ButtonProps = {
    handleClick: () => void;
}

export const Button: React.FC<React.PropsWithChildren<ButtonProps>> = ({handleClick, children}) => {
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}
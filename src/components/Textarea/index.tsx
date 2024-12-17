type TextareaProps = {
    name: string,
    handleChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void
}

export const Textarea: React.FC<TextareaProps> = ({name, handleChange}) => {
    return (
        <textarea value={name} onChange={handleChange}/>
    )
}

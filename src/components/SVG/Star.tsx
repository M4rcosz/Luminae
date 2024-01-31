interface StarProps {
    size?: number;
    className?: string;
    type?: "fill" | "empty" | "half";

}

const Star = ({
    size = 24,
    className,
    type = "fill"
}: StarProps) => {
    if (type === "fill") return <svg width={size} height={size} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Full Star">
        <path fillRule="evenodd" clipRule="evenodd" d="M26.8405 13.8517L39.9001 15.7362L30.4501 24.8836L32.6809 37.8L21.0001 31.7017L9.31925 37.8L11.5501 24.8836L2.1001 15.7362L15.1597 13.8517L21.0001 2.09998L26.8405 13.8517Z" fill="#FFA34D" />
        <path fillRule="evenodd" clipRule="evenodd" d="M21.0001 2.09998V31.7017L9.31925 37.8L11.5501 24.8836L2.1001 15.7362L15.1597 13.8517L21.0001 2.09998V2.09998Z" fill="#FFA34D" />
    </svg>

    if (type === "empty") return <svg width={size} height={size} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Empty Star">
        <path fillRule="evenodd" clipRule="evenodd" d="M26.8405 13.8517L39.9001 15.7362L30.4501 24.8836L32.6809 37.8L21.0001 31.7017L9.31925 37.8L11.5501 24.8836L2.1001 15.7362L15.1597 13.8517L21.0001 2.09998L26.8405 13.8517Z" fill="#FFA34D0" stroke="#000" />
        <path fillRule="evenodd" clipRule="evenodd" d="M21.0001 2.09998V31.7017L9.31925 37.8L11.5501 24.8836L2.1001 15.7362L15.1597 13.8517L21.0001 2.09998V2.09998Z" fill="#FFA34D0" />
    </svg>

    if (type === "half") return <svg width={size} height={size} viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className={className} aria-label="Half Star">
        <path fillRule="evenodd" clipRule="evenodd" d="M26.8405 13.8517L39.9001 15.7362L30.4501 24.8836L32.6809 37.8L21.0001 31.7017L9.31925 37.8L11.5501 24.8836L2.1001 15.7362L15.1597 13.8517L21.0001 2.09998L26.8405 13.8517Z" fill="#FFA34D0" stroke="#000" />
        <path fillRule="evenodd" clipRule="evenodd" d="M21.0001 2.09998V31.7017L9.31925 37.8L11.5501 24.8836L2.1001 15.7362L15.1597 13.8517L21.0001 2.09998V2.09998Z" fill="#FFA34D" />
    </svg>
}

export default Star
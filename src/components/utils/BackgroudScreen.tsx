interface BackgroundScreenProps {
    color: string;
    height?: string;
    className?: string;
}

const BackgroundScreen = ({ color, height, className }: BackgroundScreenProps) => {
    return <div
        className={`absolute left-0 w-full z-[-1] ${className}`}
        style={{
            backgroundColor: color,
            height: height
        }}
    ></div>
}

export default BackgroundScreen
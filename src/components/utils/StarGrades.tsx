import Star from "@/components/SVG/Star";
import { v4 as uuidv4 } from 'uuid';

interface StarGradesProps {
    grade: number;
    className?: string;
}

const StarGrades = ({ grade, className }: StarGradesProps) => {
    const amountFullStars: number = Math.floor(grade);

    const hasHalfStar: boolean = grade % 1 !== 0;

    const amountEmptyStars: number = 5 - amountFullStars - (hasHalfStar ? 1 : 0);

    const fullStars: number[] = []
    const emptyStars: number[] = []

    for (let i = 0; i < amountFullStars; i++) {
        fullStars.push(1)
    }

    for (let i = 0; i < amountEmptyStars; i++) {
        emptyStars.push(1)
    }

    return <>
        {
            fullStars.map(star => <Star type="fill" key={uuidv4()} className={className} />)
        }
        {
            hasHalfStar && <Star type="half" className={className} />
        }
        {
            emptyStars.map(star => <Star type="empty" key={uuidv4()} className={className} />)
        }
    </>
}

export default StarGrades
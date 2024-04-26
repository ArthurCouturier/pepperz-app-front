import { useState } from "react";

function StarRating() {

    const [rating, setRating] = useState(0);

    const [actualCursor, setActualCursor] = useState<number>(0);

    return (
        <div
            className="flex"
            onMouseLeave={() => setActualCursor(0)}
        >
            <Star setRating={setRating} rating={1} actualRating={rating} actualCursor={actualCursor} setActualCursor={setActualCursor} />
            <Star setRating={setRating} rating={2} actualRating={rating} actualCursor={actualCursor} setActualCursor={setActualCursor} />
            <Star setRating={setRating} rating={3} actualRating={rating} actualCursor={actualCursor} setActualCursor={setActualCursor} />
            <Star setRating={setRating} rating={4} actualRating={rating} actualCursor={actualCursor} setActualCursor={setActualCursor} />
            <Star setRating={setRating} rating={5} actualRating={rating} actualCursor={actualCursor} setActualCursor={setActualCursor} />
        </div>
    )
}

interface StarProps {
    setRating: (rating: number) => void;
    rating: number;
    actualRating: number;
    actualCursor: number;
    setActualCursor: (cursor: number) => void;
}

function Star({ setRating, rating, actualRating, actualCursor, setActualCursor }: StarProps) {
    return (
        <svg
            className={`
                star w-7 h-7 cursor-pointer hover:${() => setActualCursor(rating)} 
                ${actualRating >= rating && actualCursor === 0 ? "fill-yellow-600" : ""}
                ${actualCursor >= rating ? "fill-yellow-400" : ""}
            `}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            onClick={() => setRating(rating)}
            onMouseEnter={() => setActualCursor(rating)}
        >
            <path d="M12 2l2.4 4.9 5.4 0.8-3.9 3.8 0.9 5.4 -4.8 -2.5 -4.8 2.5 0.9 -5.4 -3.9 -3.8 5.4 -0.8L12 2z" />
        </svg>
    )
}

export default StarRating;
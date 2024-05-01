import { useEffect, useState } from "react";
import { getMyLocalPepperRate, setMyLocalPepperRate } from "../../api/client";

interface StarRatingProps {
    rateAction?: (rating: number) => void;
    rateValue?: number;
    pepperUuid?: string;
}

function StarRating({ rateAction, rateValue, pepperUuid }: StarRatingProps) {

    const [rating, setRating] = useState(0);

    const [actualCursor, setActualCursor] = useState<number>(0);

    const rate = (rating: number) => {
        setRating(rating);
        if (rateAction) {
            rateAction(rating);
        }
        setMyLocalPepperRate(pepperUuid || "", { rate: rating, comment: "", pepperUuid: pepperUuid || "", userEmail: "", uuid: "" });
    }

    useEffect(() => {
        if (pepperUuid) {
            setRating(getMyLocalPepperRate(pepperUuid)?.rate || 0);
        }
    }, [pepperUuid])

    return rateAction ? (
        <div
            className="flex justify-center"
            onMouseLeave={() => setActualCursor(0)}
        >
            <StarToRate setRating={rate} rating={1} actualRating={rating || 0} actualCursor={actualCursor} setActualCursor={setActualCursor} />
            <StarToRate setRating={rate} rating={2} actualRating={rating || 0} actualCursor={actualCursor} setActualCursor={setActualCursor} />
            <StarToRate setRating={rate} rating={3} actualRating={rating || 0} actualCursor={actualCursor} setActualCursor={setActualCursor} />
            <StarToRate setRating={rate} rating={4} actualRating={rating || 0} actualCursor={actualCursor} setActualCursor={setActualCursor} />
            <StarToRate setRating={rate} rating={5} actualRating={rating || 0} actualCursor={actualCursor} setActualCursor={setActualCursor} />
        </div>
    ) : (
        <div className="flex justify-center">
            <StarRated rating={rateValue || 0} number={1} />
            <StarRated rating={rateValue || 0} number={2} />
            <StarRated rating={rateValue || 0} number={3} />
            <StarRated rating={rateValue || 0} number={4} />
            <StarRated rating={rateValue || 0} number={5} />
        </div>
    )
}

interface StarRatedProps {
    number: number;
    rating: number;
}

function StarRated({ rating, number }: StarRatedProps) {
    return (
        <svg
            className={`
                star w-7 h-7 cursor-pointer ${(number <= rating) ? "fill-yellow-400" : ""}
            `}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            <path d="M12 2l2.4 4.9 5.4 0.8-3.9 3.8 0.9 5.4 -4.8 -2.5 -4.8 2.5 0.9 -5.4 -3.9 -3.8 5.4 -0.8L12 2z" />
        </svg>
    )
}

interface StarProps {
    setRating: (rating: number) => void;
    rating: number;
    actualRating: number;
    actualCursor: number;
    setActualCursor: (cursor: number) => void;
}

function StarToRate({ setRating, rating, actualRating, actualCursor, setActualCursor }: StarProps) {
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
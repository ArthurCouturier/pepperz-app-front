import Button from "../Buttons/Button.tsx";
import PepperTypeNames from "../../utils/PepperTypeNames.ts";
import { useState } from "react";
import imgBlack from '../../assets/peppers/poivre-noir.jpg';
import imgWhite from '../../assets/peppers/poivre-blanc.jpg';
import imgRed from '../../assets/peppers/poivre-rouge.jpg';
import imgGreen from '../../assets/peppers/poivre-vert.jpg';
import imgMix from '../../assets/peppers/poivre-mixe.jpg';

const images = {
    BLACK: imgBlack,
    WHITE: imgWhite,
    RED: imgRed,
    GREEN: imgGreen,
    MIX: imgMix,
};

interface PepperCardProps {
    className?: string;
    type: keyof typeof PepperTypeNames;
}

function PepperTypeCard({ className, type }: PepperCardProps) {

    const [isHovered, setIsHovered] = useState(false);

    return (
        <a className={`flex grid-cols-3 bg`}
            href={`/peppers/${type}`}>
            <Button className={`p-2 mx-3 my-3 border-2 rounded-xl flex flex-col transform transition-all duration-300 overflow-hidden
            ${className} 
            ${isHovered ? '' : ''}`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => {
                    setIsHovered(false);
                }}
                onClick={() => {
                }}
                img={images[type]}
            >
                <div className={"mt-2 mx-auto text-center"}>
                    Poivres {PepperTypeNames[type].toLowerCase()}s
                </div>
            </Button>
        </a>
    )
}

export default PepperTypeCard;

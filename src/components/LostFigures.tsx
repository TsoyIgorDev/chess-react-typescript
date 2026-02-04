import type { FC } from "react";
import type { Figure } from "../models/figures/Figure";

interface LostFiguresProps {
    title: string;
    figures: Figure[];
}
const LostFigures: FC<LostFiguresProps> = ({ title, figures }) => {
    return (
        <div className='lost'>
            <h3 className="text-2xl font-medium">{title}</h3>
            {figures.map(figure => (
                <div key={figure.id} className="flex text-xl gap-2.5">
                    {figure.name} {figure.logo && <img width={20} height={20} src={figure.logo} />}
                </div>
            ))}
        </div>
    )
}

export default LostFigures
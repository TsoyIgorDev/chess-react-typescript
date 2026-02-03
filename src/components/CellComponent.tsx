import type { FC } from "react";
import type { Cell } from "../models/Cell";

interface CellProps {
    cell: Cell;
    selected: boolean;
    click: (cell: Cell) => void;
}

const CellComponent: FC<CellProps> = ({ cell, selected, click }) => {
    return (
        <div onClick={() => click(cell)} className={['cell', cell.color, selected ? 'selected' : ''].join(' ')} style={{ background: cell.available && cell.figure ? '#bdafff' : '' }}>
            {cell.figure?.logo && <img src={cell.figure.logo} />}
            {cell.available && !cell.figure && <div className="available"></div>}
        </div >
    )
}

export default CellComponent
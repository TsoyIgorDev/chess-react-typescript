import { Figure, FigureNames } from "./Figure";
import BlackLogo from "../../assets/king-black.svg"
import WhiteLogo from "../../assets/king-white.svg"
import { Colors } from "../Colors";
import type { Cell } from "../Cell";

export class King extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.name = FigureNames.KING;
        this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false;
        const dx = Math.abs(this.cell.x - target.x)
        const dy = Math.abs(this.cell.y - target.y)
        return (dx === 1 || dx === 0) && (dy === 1 || dy === 0)
    }
}
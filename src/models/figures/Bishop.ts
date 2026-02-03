import type { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";
import BlackLogo from "../../assets/bishop-black.svg"
import WhiteLogo from "../../assets/bishop-white.svg"

export class Bishop extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.name = FigureNames.BISHOP;
        this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false;
        if (this.cell.isEmptyDiagonal(target)) return true;
        return false;
    }
}
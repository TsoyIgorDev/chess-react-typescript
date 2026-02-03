import { Figure, FigureNames } from "./Figure";
import BlackLogo from "../../assets/queen-black.svg"
import WhiteLogo from "../../assets/queen-white.svg"
import { Colors } from "../Colors";
import type { Cell } from "../Cell";

export class Queen extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.name = FigureNames.QUEEN;
        this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false;
        if (this.cell.isEmptyVertical(target)) return true;
        if (this.cell.isEmptyHorizontal(target)) return true;
        if (this.cell.isEmptyDiagonal(target)) return true;
        return false;
    }
}
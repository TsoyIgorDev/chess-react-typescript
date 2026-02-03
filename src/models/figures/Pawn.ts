import { Figure, FigureNames } from "./Figure";
import BlackLogo from "../../assets/pawn-black.svg"
import WhiteLogo from "../../assets/pawn-white.svg"
import { Colors } from "../Colors";
import type { Cell } from "../Cell";

export class Pawn extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.name = FigureNames.PAWN;
        this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false;
        return true;
    }
}
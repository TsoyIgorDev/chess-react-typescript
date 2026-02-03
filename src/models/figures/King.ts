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
        return true;
    }
}
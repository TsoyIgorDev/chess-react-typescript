import { Figure, FigureNames } from "./Figure";
import BlackLogo from "../../assets/knight-black.svg"
import WhiteLogo from "../../assets/knight-white.svg"
import { Colors } from "../Colors";
import type { Cell } from "../Cell";

export class Knight extends Figure {
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.name = FigureNames.KNIGHT;
        this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false;
        return true;
    }
}
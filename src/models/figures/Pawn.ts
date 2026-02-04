import { Figure, FigureNames } from "./Figure";
import BlackLogo from "../../assets/pawn-black.svg"
import WhiteLogo from "../../assets/pawn-white.svg"
import { Colors } from "../Colors";
import type { Cell } from "../Cell";

export class Pawn extends Figure {

    isFirstStep: boolean = true;
    constructor(color: Colors, cell: Cell) {
        super(color, cell);
        this.name = FigureNames.PAWN;
        this.logo = color === Colors.BLACK ? BlackLogo : WhiteLogo;
    }

    canMove(target: Cell): boolean {
        if (!super.canMove(target)) return false;

        const direction = this.cell.figure?.color === Colors.BLACK ? 1 : -1;
        const firstStepDirection = this.cell.figure?.color === Colors.BLACK ? 2 : -2;

        if ((target.y === this.cell.y + direction || this.isFirstStep && (target.y === this.cell.y + firstStepDirection)) && target.x === this.cell.x && this.cell.board.getCell(target.x, target.y).isEmpty()) {
            return true
        }

        if (target.y === this.cell.y + direction && (target.x === this.cell.x + 1 || target.x === this.cell.x - 1) && this.cell.isEnemy(target)) {
            return true;
        }

        return false;
    }

    moveFigure(target: Cell): void {
        super.moveFigure(target);
        this.isFirstStep = false;
    }
}
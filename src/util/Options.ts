import { IOption } from "../interface/IOption";

export class Options {
    public getOptions(): IOption {
        return {
            signMin: 5,
            signMax: 10,
            delimiters: [",", "."]
        }
    }
}
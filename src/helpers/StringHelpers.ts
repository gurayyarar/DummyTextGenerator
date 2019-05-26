import { IOption } from "../interface/IOption";
import { Options } from "../util/Options";

export class StringHelpers {
    capitalizeFirstLetter(text: string): string {
        return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    }

    getRandomNumber(): number {
        const options: IOption = new Options().getOptions();
        return Math.floor(Math.random() * (options.signMax - options.signMin + 1)) + options.signMin;
    }

    getRandomDelimiter(): string {
        const options: IOption = new Options().getOptions();
        return options.delimiters[Math.floor(Math.random() * options.delimiters.length)];
    }

    getRandomText(packArray: string[]): string {
        return packArray[Math.floor(Math.random() * packArray.length)].trim();
    }
}
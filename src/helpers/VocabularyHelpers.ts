import { IVocabulary } from "../interface/IVocabulary";
import { IOption } from "../interface/IOption";
import { Options } from "../util/Options";
import { StringHelpers } from "./StringHelpers";
import { VocabularyWords } from "./VocabularyWords";

export class VocabularyHelpers {
    getAllVocabularies(): IVocabulary[] {
        let vocabularies: IVocabulary[] = [];

        vocabularies.push({ label: "Lorem Ipsum", description: "(Lipsum) (of course)", pack: "lorem_ipsum" });
        vocabularies.push({ label: "Childe Harold's Pilgrimage", description: "(Lord Byron)", pack: "child_harold" });
        vocabularies.push({ label: "Decameron - Novella Prima", description: "(Giovanni Boccaccio)", pack: "decameron" });
        vocabularies.push({ label: "Faust", description: "(Goethe), German", pack: "faust" });
        vocabularies.push({ label: "In der Fremde", description: "(Heinrich Heine), German", pack: "in_der_fremde" });
        vocabularies.push({ label: "Le Bateau Ivre", description: "(Arthur Rimbaud), French", pack: "le_bateau_ivre" });
        vocabularies.push({ label: "Le Masque", description: "(Charles Baudelaire), French", pack: "le_masque" });
        vocabularies.push({ label: "Nagyon fáj", description: "(József Attila), Hungarian", pack: "nagyon_faj" });
        vocabularies.push({ label: "Ómagyar-Mária siralom", description: "(Ismeretlen), Hungarian", pack: "omagyar" });
        vocabularies.push({ label: "Robinsono Kruso", description: "(Daniel Defoe), Esperanto", pack: "robinsono_kruso" });
        vocabularies.push({ label: "The Raven", description: "(Edward Allen Poe), English", pack: "the_raven" });
        vocabularies.push({ label: "Tierra y Luna", description: "(Federico García Lorca), Spanish", pack: "tierra_y_luna" });

        return vocabularies;
    }

    getDummyText(wordCount: number, pack: string): string {
        const options: IOption = new Options().getOptions();

        const wordPackArray: string[] = VocabularyWords[pack].split(' ');
        let randomIndex: number[] = [];
        let randomDelimiters: string[] = [];
        let resultStr: string = "";
        let randomNumber: number = new StringHelpers().getRandomNumber();
        let lastDelimiter: string = "";

        randomIndex.push(randomNumber);
        randomDelimiters.push(new StringHelpers().getRandomDelimiter());

        for (let i = 0; i < Math.ceil(wordCount / options.signMin); i++) {
            randomNumber += new StringHelpers().getRandomNumber();
            const delimiter: string = new StringHelpers().getRandomDelimiter();

            randomIndex.push(randomNumber);
            randomDelimiters.push(delimiter);
        }

        for (let i = 0; i < wordCount; i++) {
            let word: string = new StringHelpers().getRandomText(wordPackArray);
            if (i === 0) { word = new StringHelpers().capitalizeFirstLetter(word); }

            if (lastDelimiter === ".") {
                resultStr += ` ${new StringHelpers().capitalizeFirstLetter(word)}`;
                lastDelimiter = "";
            } else {
                resultStr += ` ${word}`;
            }

            const indexOf: number = randomIndex.indexOf(i);
            if (indexOf > -1) {
                resultStr += randomDelimiters[indexOf];
                lastDelimiter = randomDelimiters[indexOf];
            }
        }

        resultStr += ".";

        return resultStr.substr(1);
    }
}
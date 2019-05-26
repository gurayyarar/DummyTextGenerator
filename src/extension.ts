import * as vscode from 'vscode';
import { VocabularyHelpers } from './helpers/VocabularyHelpers';

export function activate(context: vscode.ExtensionContext) {
	let disposable = vscode.commands.registerCommand('extension.startExtension', () => {
		vscode.window.showInputBox({ placeHolder: "... words", value: "20", prompt: "Type how many words you want to insert" }).then((words: any) => {
			if (words !== undefined && words !== "") {
				const wordCount: number = parseInt(words);
				if (isNaN(wordCount)) {
					vscode.window.showErrorMessage("Please type a number value!");
				} else {
					vscode.window.showQuickPick(new VocabularyHelpers().getAllVocabularies()).then((val: any) => {
						const generatedText: string = new VocabularyHelpers().getDummyText(wordCount, val.pack);
						const editor = vscode.window.activeTextEditor;

						if (editor) {
							editor.edit(p => p.insert(editor.selection.active, generatedText));
						}
					});
				}
			}
		});
	});

	context.subscriptions.push(disposable);
}

export function deactivate() { }

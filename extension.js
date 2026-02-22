'use strict';

const vscode = require('vscode');
const { formatXojo } = require('./formatter');

function activate(context) {
    const provider = vscode.languages.registerDocumentFormattingEditProvider('xojo', {
        provideDocumentFormattingEdits(document) {
            const text = document.getText();
            const formatted = formatXojo(text);
            if (formatted === text) return [];
            const fullRange = new vscode.Range(
                document.positionAt(0),
                document.positionAt(text.length)
            );
            return [vscode.TextEdit.replace(fullRange, formatted)];
        }
    });
    context.subscriptions.push(provider);
}

function deactivate() {}

module.exports = { activate, deactivate };

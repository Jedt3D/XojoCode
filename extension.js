'use strict';

const vscode = require('vscode');
const { formatXojo } = require('./formatter');

const XOJO_EXTENSIONS = [
    { pattern: '**/*.xojo_code' },
    { pattern: '**/*.xojo_window' },
    { pattern: '**/*.xojo_toolbar' },
    { pattern: '**/*.xojo_project' },
    { pattern: '**/*.xojo_menu' },
    { pattern: '**/*.xojo_database_connection' },
];

function activate(context) {
    const formatterImpl = {
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
    };

    for (const selector of XOJO_EXTENSIONS) {
        const provider = vscode.languages.registerDocumentFormattingEditProvider(
            { language: 'xojo', pattern: selector.pattern },
            formatterImpl
        );
        context.subscriptions.push(provider);
    }
}

function deactivate() {}

module.exports = { activate, deactivate };

import * as vscode from 'vscode';


export function getSelectedText(document: vscode.TextDocument, selection: vscode.Selection) {
  const charRange = new vscode.Range(
    selection.start.line,
    selection.start.character,
    selection.end.line,
    selection.end.character
  );
  return document.getText(charRange);
}

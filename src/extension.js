// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');

//import FileOps from './fileOps';

class VSCodeLinterExtension {
	constructor(){
		this.context = undefined;
		this.file = undefined;
	};

	/**
	 * @param {vscode.ExtensionContext} context 
	 */
	async activate(context) {
		this.context = context;
		//this.file = new FileOps();

		this.registerGlobalCommands();

		console.log("Congrats, Your VSCode Linter extension has been activated!!!");
	}

	/**
	 * @param {vscode.ExtensionContext} context 
	 */
	async deactivate(context) {

	}

	registerGlobalCommands() {
		let disposable = vscode.commands.registerCommand('vscode-linter.helloWorld', function(){
			vscode.window.showInformationMessage("Hello World!");
		});
		this.context.subscriptions.push(disposable);
	}
}

const extension = new VSCodeLinterExtension();

function activate(context) {
	extension.activate(context);
	return extension;
}

function deactivate(context) {
	extension.deactivate(context);
}

module.exports = {
	activate,
	deactivate
}
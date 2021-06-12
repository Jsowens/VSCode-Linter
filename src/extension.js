// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
const vscode = require('vscode');
//const FileOps = require('./fileOps');
const Linter = require('./linter');


class VSCodeLinterExtension {
	constructor(){
		this.context = undefined;
		this.linter = undefined;
	};

	/**
	 * @param {vscode.ExtensionContext} context 
	 */
	async activate(context) {
		this.context = context;
		this.linter = Linter;

		this.registerGlobalCommands();
		this.linter.init();

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

// Export activate and deactivate hooks for VS Code registration
module.exports = {
	activate,
	deactivate
}
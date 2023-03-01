import { extensions, commands, window, ExtensionContext } from 'vscode';
import { GitExtension, Repository } from "./git";
import commitRules from "./config";

export function activate(context: ExtensionContext) {
	const disposable = commands.registerCommand(
		"vscodeGitCommit.setMessage",
		(uri?) => {
		  const gitExtension = getGitExtension();

		  if (!gitExtension) {
			window.showErrorMessage("请先安装git插件!");
			return;
		  }
		  
		  // 显示选项列表，提示用户选择
		  window.showQuickPick(commitRules).then(function (values) {
			if (values) {
			  commands.executeCommand("workbench.view.scm");

			  if (uri) {
				let selectedRepository = gitExtension.repositories.find(repository => {
				  return repository.rootUri.path === uri.rootUri.path;
				});
				if (selectedRepository) {
				  prefixCommit(selectedRepository, values.code);
				}
			  } else {
				for (let repo of gitExtension.repositories) {
				  prefixCommit(repo, values.code);
				}
			  }
			}
		  });
		}
	);

	context.subscriptions.push(disposable);
}

// 选完填入操作
function prefixCommit(repository: Repository, prefix: String) {
	repository.inputBox.value !== ""
	  ? ((repository.inputBox.value = ""),
		(repository.inputBox.value = `${prefix}${repository.inputBox.value}`))
	  : (repository.inputBox.value = `${prefix}${repository.inputBox.value}`);
}

// 点击小图标进入插件
function getGitExtension() {
	const vscodeGit = extensions.getExtension<GitExtension>("vscode.git");
	const gitExtension = vscodeGit && vscodeGit.exports;
	return gitExtension && gitExtension.getAPI(1);
}

// This method is called when your extension is deactivated
export function deactivate() {}

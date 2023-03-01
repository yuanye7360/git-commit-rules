import { QuickPickItem } from 'vscode';

type CommitRules = QuickPickItem & {
  code: string;
};

const commitRules: Array<CommitRules> = [
  {
    label: "feat✨: ",
    code: "feat: ",
    description: "引入新功能",
  },
  {
    label: "fix🐛: ",
    code: "fix: ",
    description: "修复bug",
  },
  {
    label: "style💄: ",
    code: "style: ",
    description: "更新UI样式文件",
  },
  {
    label: "format🥚: ",
    code: "format: ",
    description: "格式化代码",
  },
  {
    label: "docs📝: ",
    code: "docs: ",
    description: "添加/更新文档",
  },
  {
    label: "perf👌: ",
    code: "perf: ",
    description: "提高性能/优化",
  },
  {
    label: "init🎉: ",
    code: "init: ",
    description: "初次提交/初始化项目",
  },
  {
    label: "test✅: ",
    code: "test: ",
    description: "增加测试代码",
  },
  {
    label: "refactor🎨: ",
    code: "refactor: ",
    description: "改进代码结构/代码格式",
  },
  {
    label: "patch🚑: ",
    code: "patch: ",
    description: "添加重要补丁",
  },
  {
    label: "file📦: ",
    code: "file: ",
    description: "添加新文件",
  },
  {
    label: "publish🚀: ",
    code: "publish: ",
    description: "发布新版本",
  },
  {
    label: "tag📌: ",
    code: "tag: ",
    description: "发布版本/添加标签",
  },
  {
    label: "config🔧: ",
    code: "config: ",
    description: "修改配置文件",
  },
  {
    label: "git🙈: ",
    code: "git: ",
    description: "添加或修改.gitignore文件",
  }
];

export default commitRules;

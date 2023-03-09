import { QuickPickItem } from 'vscode';

type CommitRules = QuickPickItem & {
  code: string;
};

const commitRules: Array<CommitRules> = [
  {
    label: "feat✨: ",
    code: "feat: ",
    description: "新增或調整功能",
  },
  {
    label: "fix🐛: ",
    code: "fix: ",
    description: "修正程式錯誤",
  },
  {
    label: "style💄: ",
    code: "style: ",
    description: "coding style 格式修正 -- 不影響程式碼運行的變動",
  },
  {
    label: "docs📝: ",
    code: "docs: ",
    description: "文件更新",
  },
  {
    label: "perf👌: ",
    code: "perf: ",
    description: "效能優化",
  },
  {
    label: "test✅: ",
    code: "test: ",
    description: "新增、調整測試",
  },
  {
    label: "refactor🎨: ",
    code: "refactor: ",
    description: "重構 -- 不是新增功能，也非修正錯誤的程式碼變動",
  },
  {
    label: "chore🔧: ",
    code: "chore: ",
    description: "維護性質的調整 -- 不影響程式碼運行，輔助工具的變動（例如 eslint 套件版本更新）",
  },
  {
    label: "reverth🚑: ",
    code: "revert: ",
    description: "回退之前的 commit",
  },
];

export default commitRules;

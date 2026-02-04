import type { editor } from 'monaco-editor';

export const editorOptions: editor.IStandaloneEditorConstructionOptions = {
    contextmenu: false,

    fontFamily: 'JetBrains Mono, Fira Code, monospace',
    fontSize: 14,
    lineHeight: 22,

    matchBrackets: 'always',
    autoClosingBrackets: 'always',
    autoClosingQuotes: 'always',
    autoSurround: 'languageDefined',

    minimap: { enabled: false },

    lineNumbersMinChars: 3,
    glyphMargin: false,
    folding: false,

    overviewRulerLanes: 0,
    hideCursorInOverviewRuler: true,

    roundedSelection: false,
    automaticLayout: true,

    wordWrap: 'on',
    wrappingIndent: 'same',
};

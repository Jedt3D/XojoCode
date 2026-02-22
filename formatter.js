'use strict';

const BLOCK_OPEN = /^(?:(?:protected\s+|public\s+|private\s+)?(?:class|interface|module|enum|structure)\b|sub\b|function\b|property\b|event\b|delegate\b|#tag\s+(?:class|interface|module|method|property|event|enum|structure|delegate)\b|begin\b|if\b(?!.*\bthen\b.*\S)|for\b|while\b|do\b|select\s+case\b|try\b|with\b)/i;
const BLOCK_CLOSE = /^(?:end\b|next\b|wend\b|loop\b|#tag\s+end\w*\b)/i;
const BLOCK_NEUTRAL = /^(?:else\b|elseif\b|catch\b|finally\b|case\b)/i;

const KEYWORDS = [
    'AddressOf', 'And', 'Array', 'As', 'Assigns', 'Auto',
    'ByRef', 'ByVal',
    'Call', 'Case', 'Catch', 'Class', 'Const', 'Continue',
    'Delegate', 'Dim', 'Do', 'DownTo',
    'Each', 'Else', 'ElseIf', 'End', 'Enum', 'Event', 'Exception', 'Exit', 'Extends',
    'False', 'Finally', 'For', 'Function',
    'Global', 'GoTo',
    'If', 'Implements', 'In', 'Inherits', 'Interface', 'Is', 'IsA',
    'Loop',
    'Me', 'Mod', 'Module',
    'New', 'Next', 'Nil', 'Not',
    'Object', 'Optional', 'Or',
    'ParamArray', 'Private', 'Property', 'Protected', 'Public',
    'Raise', 'RaiseEvent', 'Return',
    'Select', 'Self', 'Shared', 'Static', 'Step', 'Structure', 'Sub', 'Super',
    'Then', 'To', 'Try',
    'Until',
    'Var',
    'WeakAddressOf', 'Wend', 'While', 'With',
    'Xor',
];

const KEYWORD_MAP = new Map(KEYWORDS.map(k => [k.toLowerCase(), k]));

function normalizeKeywordCasing(line) {
    return line.replace(/\b([a-zA-Z_]\w*)\b/g, (match) => {
        const lower = match.toLowerCase();
        return KEYWORD_MAP.has(lower) ? KEYWORD_MAP.get(lower) : match;
    });
}

function normalizeAssignmentSpacing(line) {
    return line.replace(/([A-Za-z_]\w*)\s*=\s*(?!=)/g, (match, key, offset, str) => {
        const before = str.slice(0, offset);
        if (/[<>!]$/.test(before)) return match;
        return `${key} = `;
    });
}

function trimTrailingWhitespace(line) {
    return line.replace(/\s+$/, '');
}

function getIndentToken(line) {
    const stripped = line.trim();
    if (BLOCK_NEUTRAL.test(stripped)) return 'neutral';
    if (BLOCK_CLOSE.test(stripped)) return 'close';
    if (BLOCK_OPEN.test(stripped)) return 'open';
    return 'none';
}

function formatXojo(text) {
    const lines = text.split(/\r?\n/);
    const result = [];
    let indentLevel = 0;
    const TAB = '   ';

    let prevWasTagEnd = false;
    let prevWasTagMethod = false;

    for (let i = 0; i < lines.length; i++) {
        let line = trimTrailingWhitespace(lines[i]);
        const stripped = line.trim();

        if (stripped === '') {
            result.push('');
            prevWasTagEnd = false;
            prevWasTagMethod = false;
            continue;
        }

        const isTagEndMethod = /^#tag\s+EndMethod\b/i.test(stripped);
        const isTagMethod = /^#tag\s+Method\b/i.test(stripped);

        if (isTagMethod && result.length > 0 && !prevWasTagEnd) {
            const last = result[result.length - 1];
            if (last !== '') result.push('');
        }

        if (isTagEndMethod && result.length > 0) {
            const last = result[result.length - 1];
            if (last !== '') result.push('');
        }

        const token = getIndentToken(stripped);

        if (token === 'close' || token === 'neutral') {
            indentLevel = Math.max(0, indentLevel - 1);
        }

        line = normalizeKeywordCasing(stripped);
        line = normalizeAssignmentSpacing(line);
        line = trimTrailingWhitespace(line);

        result.push(TAB.repeat(indentLevel) + line);

        if (token === 'open' || token === 'neutral') {
            indentLevel++;
        }

        prevWasTagEnd = isTagEndMethod;
        prevWasTagMethod = isTagMethod;
    }

    return result.join('\n');
}

module.exports = { formatXojo };

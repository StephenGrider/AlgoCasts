// TypeScript definitions for kleur
// Definitions by: Madhav Varshney <https://github.com/madhavarshney>
// Originally written for ansi-colors
// Originally by: Rogier Schouten <https://github.com/rogierschouten>

/**
 * Each method can be called as a function
 * or return a chainable Kleur object
 */
interface KleurOrFunction extends KleurInstance {
    (string: string): string;
}

interface KleurInstance {
    /* Colors */
    black: KleurOrFunction;
    red: KleurOrFunction;
    green: KleurOrFunction;
    yellow: KleurOrFunction;
    blue: KleurOrFunction;
    magenta: KleurOrFunction;
    cyan: KleurOrFunction;
    white: KleurOrFunction;
    gray: KleurOrFunction;

    /* Background Colors */
    bgBlack: KleurOrFunction;
    bgRed: KleurOrFunction;
    bgGreen: KleurOrFunction;
    bgYellow: KleurOrFunction;
    bgBlue: KleurOrFunction;
    bgMagenta: KleurOrFunction;
    bgCyan: KleurOrFunction;
    bgWhite: KleurOrFunction;

    /* Modifiers */
    reset: KleurOrFunction;
    bold: KleurOrFunction;
    dim: KleurOrFunction;
    italic: KleurOrFunction;
    underline: KleurOrFunction;
    inverse: KleurOrFunction;
    hidden: KleurOrFunction;
    strikethrough: KleurOrFunction;
}

/* Colors */
export const black: KleurOrFunction;
export const red: KleurOrFunction;
export const green: KleurOrFunction;
export const yellow: KleurOrFunction;
export const blue: KleurOrFunction;
export const magenta: KleurOrFunction;
export const cyan: KleurOrFunction;
export const white: KleurOrFunction;
export const gray: KleurOrFunction;

/* Background Colors */
export const bgBlack: KleurOrFunction;
export const bgRed: KleurOrFunction;
export const bgGreen: KleurOrFunction;
export const bgYellow: KleurOrFunction;
export const bgBlue: KleurOrFunction;
export const bgMagenta: KleurOrFunction;
export const bgCyan: KleurOrFunction;
export const bgWhite: KleurOrFunction;

/* Modifiers */
export const reset: KleurOrFunction;
export const bold: KleurOrFunction;
export const dim: KleurOrFunction;
export const italic: KleurOrFunction;
export const underline: KleurOrFunction;
export const inverse: KleurOrFunction;
export const hidden: KleurOrFunction;
export const strikethrough: KleurOrFunction;

/**
 * Enable ANSI Colors.
 * Note: You cannot write to ES6 exports and therefore to `kleur.enabled`
 *       in TypeScript with `import * as kleur from 'kleur';`.
 *       Workaround is to use `import kleur = require('kleur');`.
 */
export let enabled: boolean;

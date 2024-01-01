/**
 * creates modifiers object from modifier or array of modifiers
 * @param {String} block block name
 * @param {String} element element name
 * @param {String | Array} modifiers modifiers
 * @return {Object}
 */
export const reduceModifiers = (block: string, element: string, modifiers: Array<string> | string) => {
	if (Array.isArray(modifiers)) {
		return modifiers.reduce((acc: any, mdfr: string) => {
			acc[`${block}__${element}--${mdfr}`] = !!mdfr;
			return acc;
		}, {});
	}
	return { [`${block}__${element}--${modifiers}`]: !!modifiers };
};

/**
 * creates a function for creating vue BEM classes
 * @param {String} block BEM block name
 * @returns {function}
 */
export const bemClassFactory = (block: any) => {
	return (element: string, modifiers: string = '', modifierOnly: boolean = false) => ({
		[`${block}__${element}`]: !modifierOnly,
		...reduceModifiers(block, element, modifiers),
	});
};

/**
 * creates vue className mixin
 * @param {String} block BEM block name
 * @returns {Object}
 */
export const classNameMixin = (block: any) => ({
	data() {
		return {
			blockClassName: block,
		};
	},
	methods: {
		className: bemClassFactory(block),
	},
});

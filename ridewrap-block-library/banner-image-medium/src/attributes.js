export default {
	title: {
		type: 'string',
		selector: 'h3',
		default: 'Banner Title'
	},
    subtitle: {
		type: 'string',
		selector: 'h4',
		default: 'Banner Sub-title'
	},
	cta_link: {
		type: 'string',
		selector: 'p',
	},
	cta_text: {
		type: 'string',
		selector: 'p',
		default: 'Buy now'
	},
	super_checker_show: {
		type: 'boolean',
		default: false,
	},
};
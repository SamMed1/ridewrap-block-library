export default {
	title: {
		type: 'string',
		selector: 'h3',
		default: 'tailored fork protection™'
	},
    paragraph: {
		type: 'string',
		selector: 'p',
	},
	link: {
		type: 'string',
		selector: 'p',
	},
	cta_text: {
		type: 'string',
		selector: 'p',
		default: 'Buy now'
	},
	progress_circle_show: {
		type: 'boolean',
		default: false,
	},
	progress_circle_position: {
		type: 'string',
		default: 'center',
	},
    progress_circle_percentage: {
		type: 'string',
		default: 'percentage-95',
	},
	add_to_cart_link: {
		type: 'string',
		default: ''
	},
};
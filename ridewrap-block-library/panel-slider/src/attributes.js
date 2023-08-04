export default {
	title: {
		type: 'string',
		selector: 'h3',
	},
    paragraph: {
		type: 'string',
		selector: 'p',
	},
	slider: {
		type: 'boolean',
		default: true,
	},
	block_color: {
		type: 'string',
		default: '',
	},
	block_graphic: {
		type: 'string',
		default: 'none',
	},
	progress_circle_show: {
		type: 'boolean',
		default: false,
	},
	progress_circle_percentage: {
		type: 'string',
		default: 'percentage-95',
	},
	heading_level: {
		type: 'string',
		default: 'h2',
	},
};
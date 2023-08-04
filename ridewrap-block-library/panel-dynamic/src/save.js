import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';

export default function save() {
	return (
		<p { ...useBlockProps.save() }>
			{ __(
				'Panel Dynamic – hello from the saved content!',
				'panel-dynamic'
			) }
		</p>
	);
}

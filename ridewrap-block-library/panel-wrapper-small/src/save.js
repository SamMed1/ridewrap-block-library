import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();
	const titleAsHTML = function() {
		return attributes.title.toLowerCase().replace(/ /g, "_");
	}
	return (
		<div { ...blockProps }>
			<div className='container container-wide container-flex-wrap'>
				<InnerBlocks.Content />
			</div>
		</div>
	);
}

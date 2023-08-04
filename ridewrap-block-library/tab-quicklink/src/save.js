import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();
	return (
			<a { ...blockProps } href={ attributes.link }>
				{ attributes.title } 
			</a>
	);
}

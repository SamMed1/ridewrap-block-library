import { __ } from '@wordpress/i18n';
import { RichText, InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
			<div className='container container-wide container-flex-wrap'>
				<div className='col'>
					<RichText.Content tagName="h2" className="h3-style" value={ attributes.title } />
				</div>
				<div className='col'>
					<RichText.Content tagName="p" value={ attributes.paragraph } />
				</div>
			</div>
		</div>
	);
}

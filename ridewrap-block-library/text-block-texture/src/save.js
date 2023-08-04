import { __ } from '@wordpress/i18n';
import { RichText, InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();
	return (
		<div { ...blockProps }>
			<InnerBlocks.Content />
			<div className='container container-wide container-flex-wrap'>
				<div className='col'>
					<h4 className='h4-style'>
						<span>
							{ attributes.title }
						</span>
					</h4>
					<RichText.Content tagName="p" className="" value={ attributes.paragraph } />
				</div>
			</div>
		</div>
	);
}

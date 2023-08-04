import { __ } from '@wordpress/i18n';
import { RichText, InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();

	return (
		<div { ...blockProps }>
			<div class="c-post-cta-img">
				<InnerBlocks.Content />
			</div>
			<div class="c-post-cta-content">
				<RichText.Content tagName="h5" className="h5-style" value={ attributes.title } />
				<RichText.Content tagName="a" href={ attributes.link } className="h4-style" value={ attributes.cta_text } />
			</div>
		</div>
	);
}

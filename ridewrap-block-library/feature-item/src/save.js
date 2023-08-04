import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();
	return (
		<li class="splide__slide">
			<div { ...blockProps }>
				<InnerBlocks.Content />
				<h4 className='h5-style'>
					{ attributes.title } 
				</h4>
				<p>
					{ attributes.paragraph } 
				</p>
			</div>
		</li>
	);
}

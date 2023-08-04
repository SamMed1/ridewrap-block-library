import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();
	return (
		<li class="splide__slide">
			<div { ...blockProps }>
				<a href={ attributes.link }>
					<InnerBlocks.Content />
					<h4 className='h4-style'>
						{ attributes.title } 
					</h4>
				</a>
			</div>
		</li>
	);
}

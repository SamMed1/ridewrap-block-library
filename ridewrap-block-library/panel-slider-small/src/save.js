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
				<div className='col'>
					<h2 className='h2-style'>
						{ attributes.title }
					</h2>
				</div>
				<div className='col'>
					<div class="splide" id={ 'splide_' + titleAsHTML() } role="group" aria-label={ attributes.title }>
						<div class="splide__track">
							<ul class="splide__list">
								<InnerBlocks.Content />
							</ul>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

import { __ } from '@wordpress/i18n';
import { RichText, InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();
	const titleAsHTML = function() {
		return attributes.title.toLowerCase().replace(/ /g, "_");
	}

	if ( attributes.show == true ) {
		return (
			<div { ...blockProps }>
				<div className='container container-wide container-flex-wrap'>
					<div className='col'>
						<RichText.Content tagName="h3" className="h3-style" value={ attributes.title } />
						<RichText.Content tagName="p" value={ attributes.paragraph } />
					</div>
					<div className='col'>
						<div className='splide' id={ 'splide_' + titleAsHTML() } role="group" aria-label={ attributes.title }>
							<div class="splide__track">
								<ul class="splide__list">
									<InnerBlocks.Content />
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className='border'></div>
			</div>
		);
	} else {
		return (
			<div { ...blockProps }>
				<div className='container container-wide container-flex-wrap'>
					<div className='col'>
						<RichText.Content tagName="h3" className="h3-style" value={ attributes.title } />
						<RichText.Content tagName="p" value={ attributes.paragraph } />
					</div>
					<div className='col no-splide'>
						<InnerBlocks.Content />
					</div>
				</div>
				<div className='border'></div>
			</div>
		);
	}
}

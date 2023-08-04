import { __ } from '@wordpress/i18n';
import { RichText, InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save( {
		className: attributes.block_color + ' ' + attributes.block_graphic
	});

	const titleAsHTML = function() {
		if ( attributes.title ) {
			return attributes.title.toLowerCase().replace(/ /g, "_");
		}
	}

	const paragraphExists = function() {
		if ( attributes.paragraph ) {
			return 'paragraph';
		} else {
			return 'no-paragraph';
		}
	}

	// Progress circle percentage variable and function.
	var progressCirclePercentage = ' ' + attributes.progress_circle_percentage;

	const progressCircles = function() {
		if ( attributes.progress_circle_show == true ) {
			return (
				<div className={ titleAsHTML() + ' progress-circle-wrap progress-circle-wrap-slider' + progressCirclePercentage }>
					<div class="progress-circle">
						<div class="mask full">
							<div class="fill"></div>
						</div>
						<div class="mask half">
							<div class="fill"></div>
						</div>
						<div class="progress-circle-inside"></div>
					</div>
				</div>
			);
		} else {
			return;
		}
	}

	if ( attributes.slider == true ) {
		return (
			<div { ...blockProps }>
				<div className='container container-wide container-flex-wrap'>
					<div className={ 'col ' + paragraphExists() }>
						<RichText.Content tagName={ attributes.heading_level } className={ attributes.heading_level + '-style'} value={ attributes.title } />
						{ progressCircles() }
						<RichText.Content tagName="p" value={ attributes.paragraph } />
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
				<div className='border'></div>
			</div>
		);
		} else {
			return (
				<div { ...blockProps }>
					<div className='container container-wide container-flex-wrap'>
						<div className={ 'col ' + paragraphExists() }>
							<RichText.Content tagName={ attributes.heading_level } className={ attributes.heading_level + '-style'} value={ attributes.title } />
							{ progressCircles() }
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

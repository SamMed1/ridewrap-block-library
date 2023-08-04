import { __ } from '@wordpress/i18n';
import { RichText, InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();

	const titleAsHTML = function() {
		return attributes.title.toLowerCase().replace(/ /g, "_").replace(/[™]/g,'');
	}

	// Progress circle positioning class.
	var classString = '';
	if ( attributes.progress_circle_position == 'left' ) {
		classString = ' progress-circle-left';
	} else {
		classString = '';
	}

	// Progress circle exists class.
	var progressCircleWrapperClass = '';
	if ( attributes.progress_circle_show == true ) {
		progressCircleWrapperClass = ' progress-circle-panel';
	} else {
		progressCircleWrapperClass = '';
	}

	// Progress circle percentage variable and function.
	var progressCirclePercentage = ' ' + attributes.progress_circle_percentage;

	const progressCircles = function() {
		if ( attributes.progress_circle_show == true ) {
			return (
				<div className={ titleAsHTML() + ' progress-circle-wrap' + classString + progressCirclePercentage }>
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

	// ProductAdd to cart button display class.
	var addToCartBtn = '';
	if ( attributes.add_to_cart_show == true ) {
		addToCartBtn = ' show-cart-btn';
	}

	// Product price display class.
	var showPrice = '';
	if ( attributes.product_price_show == true ) {
		showPrice = ' show-price';
	}

	return (
		<li className={ 'splide__slide' + progressCircleWrapperClass + showPrice + addToCartBtn }>
			<div { ...blockProps }>
				<a href={ attributes.link }>
					<div className={ 'block-internal' }>
						<RichText.Content tagName="h3" className="h3-style" value={ attributes.title } />
						<RichText.Content tagName="p" value={ attributes.paragraph } />
						{ progressCircles() }
					</div>
					
					<InnerBlocks.Content />
					<RichText.Content tagName="h4" className="h4-style" value={ attributes.cta_text } />
				</a>
			</div>
		</li>
	);
}

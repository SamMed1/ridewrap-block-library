import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';
import './style.scss';

const TEMPLATE = [ [ 'core/image' ], [ 'core/shortcode', { placeholder: 'Enter side content...' } ] ];

import { TextControl, SelectControl, ToggleControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes, className } ) {
	const blockProps = useBlockProps();

	// Change default Product Price Shortcode Input ID.
	const shortcodePlaceholderEls = document.querySelectorAll( '.blocks-shortcode__textarea' );
	for ( let i = 0; i < shortcodePlaceholderEls.length; i++ ) {
		shortcodePlaceholderEls[i].setAttribute( 'placeholder', ' EG - [add_to_cart id="33570"] ' );
	}

	const editProgressCircleElements = function() {
		if ( attributes.progress_circle_show == true ) {
			return (
				<div>
					<SelectControl
						label="Progress circle position"
						value={ attributes.progress_circle_position }
						options={ [
							{ label: 'Left', value: 'left' },
							{ label: 'Center', value: 'center' },
						] }
						onChange={( value ) => setAttributes({ progress_circle_position: value })}
					/>
					<SelectControl
						label="Progress circle percentage"
						value={ attributes.progress_circle_percentage }
						options={ [
							{ label: '95%', value: 'percentage-95' },
							{ label: '60%', value: 'percentage-60' },
							{ label: '30%', value: 'percentage-30' },
						] }
						onChange={( value ) => setAttributes({ progress_circle_percentage: value })}
					/>
				</div>
			)
		}
	}

	return (
		<div { ...blockProps }>
			<ToggleControl
				label="Show progress circle?"
				checked={ attributes.progress_circle_show }
				onChange={() => setAttributes({ progress_circle_show: !attributes.progress_circle_show })}
			/>
			{ editProgressCircleElements() }
			<RichText
				className='h3-style'
				tagName="h3"
				value={ attributes.title }
				onChange={ ( title ) => setAttributes( { title } ) }
				placeholder={ __( 'Block Title', 'gutenberg' ) }
			/>
			<RichText
				className=''
				tagName="p"
				value={ attributes.paragraph }
				onChange={ ( paragraph ) => setAttributes( { paragraph } ) }
				placeholder={ __( 'Block Paragraph', 'gutenberg' ) }
			/>
			<InnerBlocks
				template={ TEMPLATE }
				templateLock="all"
			/>
			<ToggleControl
				label="Enable users to 'add to cart'?"
				checked={ attributes.add_to_cart_show }
				onChange={() => setAttributes({ add_to_cart_show: !attributes.add_to_cart_show })}
			/>
			<ToggleControl
				label="Display product price?"
				checked={ attributes.product_price_show }
				onChange={() => setAttributes({ product_price_show: !attributes.product_price_show })}
			/>
			<RichText
				className=''
				tagName="h4"
				value={ attributes.cta_text }
				onChange={ ( cta_text ) => setAttributes( { cta_text } ) }
				placeholder={ __( 'Buy now', 'gutenberg' ) }
			/>
			<RichText
				className='block-link'
				tagName="a"
				value={ attributes.link }
				onChange={ ( link ) => setAttributes( { link } ) }
				placeholder={ __( 'Add link here', 'gutenberg' ) }
			/>
		</div>
	);
}

import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';
import './style.scss';

const TEMPLATE = [ [ 'core/image' ] ];

import { TextControl, SelectControl, ToggleControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes, className } ) {
	const blockProps = useBlockProps();

	const editProgressCircleElements = function() {
		if ( attributes.progress_circle_show == true ) {
			return (
				<div className='custom-control-wrapper'>
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
			<TextControl
				label="Add to Cart Product ID - Only use if you want to enable users to 'add to cart' on panel click."
				placeholder='eg 3389'
				value={ attributes.add_to_cart_link }
				onChange={( value ) => setAttributes({ add_to_cart_link: value })}
			/>
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

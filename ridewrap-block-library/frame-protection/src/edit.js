import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';
import './style.scss';

import { SelectControl, ToggleControl } from '@wordpress/components';

const TEMPLATE = [ [ 'core/list' ] ];

export default function Edit( { attributes, setAttributes, className } ) {
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<div className='container'>
				<div className='custom-block-controls'>
					<SelectControl
						label="Block background color"
						value={ attributes.block_color }
						options={ [
							{ label: 'Red Medium', value: 'block-background-red-medium' },
							{ label: 'Blue Medium', value: 'block-background-blue-medium' },
						] }
						onChange={( value ) => setAttributes({ block_color: value })}
					/>
					<SelectControl
						label="Bike Type"
						value={ attributes.bike_type }
						options={ [
							{ label: 'MTB', value: 'bike-type-mtb' },
							{ label: 'Road', value: 'bike-type-road' },
							{ label: 'Gravel', value: 'bike-type-gravel' },
							{ label: 'City', value: 'bike-type-city' },
							{ label: 'E-Bike', value: 'bike-type-e' },
							{ label: 'Kids', value: 'bike-type-kids' },
							{ label: 'Essential', value: 'bike-type-essential' },
							{ label: 'Covered', value: 'bike-type-covered' },
						] }
						onChange={( value ) => setAttributes({ bike_type: value })}
					/>
					<ToggleControl
						label="Show quicklinks?"
						checked={ attributes.quicklinks_show }
						onChange={() => setAttributes({ quicklinks_show: !attributes.quicklinks_show })}
					/>
				</div>
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
					placeholder={ __( 'Block Text', 'gutenberg' ) }
				/>
				<InnerBlocks
					template={ TEMPLATE }
					allowedBlocks={ [
						'core/list',
						'acf/faq-selector',
					] }
				/>
				<RichText
					className=''
					tagName="h5"
					value={ attributes.cta_text }
					onChange={ ( cta_text ) => setAttributes( { cta_text } ) }
					placeholder={ __( 'CTA Text', 'gutenberg' ) }
				/>
				<RichText
					className=''
					tagName="a"
					value={ attributes.cta_link }
					onChange={ ( cta_link ) => setAttributes( { cta_link } ) }
					placeholder={ __( 'CTA Link', 'gutenberg' ) }
				/>
			</div>
		</div>
	);
}

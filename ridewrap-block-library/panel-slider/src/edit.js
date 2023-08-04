import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './style.scss';

const TEMPLATE = [ [ 'ridewrap-block/panel-dynamic' ] ];

import { RichText } from '@wordpress/block-editor';

import { SelectControl, ToggleControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes, className } ) {
	const blockProps = useBlockProps();

	const editProgressCircleElements = function() {
		if ( attributes.progress_circle_show == true ) {
			return (
				<div>
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
			<div className='container'>
				<div className='custom-block-controls'>
					<ToggleControl
						label="Should this be a carousel?"
						help={ attributes.slider ? "Yes" : "No" }
						checked={ attributes.slider }
						onChange={() => setAttributes({ slider: !attributes.slider })}
					/>
					<SelectControl
						label="Block background color"
						value={ attributes.block_color }
						options={ [
							{ label: 'None', value: 'none' },
							{ label: 'Blue Medium', value: 'block-background-blue-medium' },
							{ label: 'Grey Medium', value: 'block-background-grey-medium' },
							{ label: 'Blue Highlight', value: 'block-blue-highlight' },
							{ label: 'Grey Highlight', value: 'block-grey-highlight' },
							{ label: 'Red Highlight', value: 'block-red-highlight' },
						] }
						onChange={( value ) => setAttributes({ block_color: value })}
					/>
					<SelectControl
						label="Block graphic"
						value={ attributes.block_graphic }
						options={ [
							{ label: 'None', value: 'none' },
							{ label: 'Shuttle', value: 'block-graphic-shuttle' },
							{ label: 'Shuttle Blue', value: 'block-graphic-shuttle-blue' },
						] }
						onChange={( value ) => setAttributes({ block_graphic: value })}
					/>
					<ToggleControl
						label="Show progress circle?"
						checked={ attributes.progress_circle_show }
						onChange={() => setAttributes({ progress_circle_show: !attributes.progress_circle_show })}
					/>
					{ editProgressCircleElements() }
				</div>
				<div className='custom-block-controls'>
					<SelectControl
						className='heading-select'
						label="Heading level selector"
						value={ attributes.heading_level }
						options={ [
							{ label: 'h1', value: 'h1' },
							{ label: 'h2', value: 'h2' },
							{ label: 'h3', value: 'h3' },
							{ label: 'h4', value: 'h4' },
							{ label: 'h5', value: 'h5' },
						] }
						onChange={( value ) => setAttributes({ heading_level: value })}
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
						'ridewrap-block/panel',
						'ridewrap-block/panel-horizontal',
						'ridewrap-block/panel-full-width',
						'ridewrap-block/panel-dynamic',
						'ridewrap-block/tab-quicklink',
					] }
				/>
			</div>
		</div>
	);
}

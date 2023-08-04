import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './style.scss';

import { useSelect } from '@wordpress/data';

const TEMPLATE = [ [ 'ridewrap-block/feature-item' ] ];

import { RichText } from '@wordpress/block-editor';

import { ToggleControl } from '@wordpress/components';
import { useState } from '@wordpress/element';

export default function Edit( { attributes, setAttributes, className } ) {
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<div className='container'>
				<ToggleControl
					label="Should this be a carousel?"
					help={ attributes.show ? "Yes" : "No" }
					checked={ attributes.show }
					onChange={() => setAttributes({ show: !attributes.show })}
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
					placeholder={ __( 'Block Title', 'gutenberg' ) }
				/>
				<InnerBlocks
					template={ TEMPLATE }
					allowedBlocks={ [
						'ridewrap-block/feature-item'
					] }
				/>
			</div>
		</div>
	);
}

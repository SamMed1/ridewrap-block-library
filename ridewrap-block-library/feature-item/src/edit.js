import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './style.scss';

const TEMPLATE = [ [ 'core/image' ] ];

import { RichText } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes, className } ) {
	const blockProps = useBlockProps();
	return (
		<div { ...blockProps }>
			<InnerBlocks
				template={ TEMPLATE }
				templateLock="all"
			/>
			<RichText
				className='h5-style'
				tagName="h5"
				value={ attributes.title }
				onChange={ ( title ) => setAttributes( { title } ) }
				placeholder={ __( 'Block Title', 'gutenberg' ) }
			/>
			<RichText
				className='block-paragraph'
				tagName="p"
				value={ attributes.paragraph }
				onChange={ ( paragraph ) => setAttributes( { paragraph } ) }
				placeholder={ __( 'Block Paragraph', 'gutenberg' ) }
			/>
		</div>
	);
}

import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './style.scss';

import { RichText } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes, className } ) {
	const blockProps = useBlockProps();
	return (
		<div { ...blockProps }>
			<RichText
				className='h4-style'
				tagName="h4"
				value={ attributes.title }
				onChange={ ( title ) => setAttributes( { title } ) }
				placeholder={ __( 'Block Title', 'gutenberg' ) }
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

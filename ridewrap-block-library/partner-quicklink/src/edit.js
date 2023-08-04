import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './style.scss';

const TEMPLATE = [ [ 'core/image' ] ];

import { RichText } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes, className } ) {
	const blockProps = useBlockProps();
	return (
		<div { ...blockProps }>
			<RichText
				className='h3-style'
				tagName="h3"
				value={ attributes.partner_name }
				onChange={ ( partner_name ) => setAttributes( { partner_name } ) }
				placeholder={ __( 'Partner name', 'gutenberg' ) }
			/>
			<RichText
				className=''
				tagName="p"
				value={ attributes.partner_description }
				onChange={ ( partner_description ) => setAttributes( { partner_description } ) }
				placeholder={ __( 'Region list ( Comma seperated )', 'gutenberg' ) }
			/>
			<InnerBlocks
				template={ TEMPLATE }
				templateLock="all"
			/>
			<RichText
				className='h4-style'
				tagName="h4"
				value={ attributes.partner_link_text }
				onChange={ ( partner_link_text ) => setAttributes( { partner_link_text } ) }
				placeholder={ __( 'Block Title', 'gutenberg' ) }
			/>
			<RichText
				className='block-link'
				tagName="a"
				value={ attributes.partner_link_url }
				onChange={ ( partner_link_url ) => setAttributes( { partner_link_url } ) }
				placeholder={ __( 'Add link here', 'gutenberg' ) }
			/>
		</div>
	);
}

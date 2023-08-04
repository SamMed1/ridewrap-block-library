import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';
import './style.scss';

const TEMPLATE = [ [ 'core/image' ] ];

import { ToggleControl } from '@wordpress/components';

export default function Edit( { attributes, setAttributes, className } ) {
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<div className='container'>
				<div className='custom-block-controls'>
					<ToggleControl
						label="Should this be a Super Checker Banner?"
						help={ attributes.super_checker_show ? "Yes" : "No" }
						checked={ attributes.super_checker_show }
						onChange={() => setAttributes({ super_checker_show: !attributes.super_checker_show })}
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
					tagName="h4"
					value={ attributes.subtitle }
					onChange={ ( subtitle ) => setAttributes( { subtitle } ) }
					placeholder={ __( 'Block Title', 'gutenberg' ) }
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
					value={ attributes.cta_link }
					onChange={ ( cta_link ) => setAttributes( { cta_link } ) }
					placeholder={ __( 'Add link here', 'gutenberg' ) }
				/>
			</div>
		</div>
	);
}

import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps, RichText } from '@wordpress/block-editor';
import './style.scss';

const TEMPLATE = [ [ 'core/image' ] ];

export default function Edit( { attributes, setAttributes, className } ) {
	const blockProps = useBlockProps();
	return (
		<div { ...blockProps }>
			<div className='container'>
				<div>
					<InnerBlocks
						template={ TEMPLATE }
						templateLock="all"
					/>
				</div>
				<div>
					<RichText
						className='h4-style'
						tagName="h4"
						value={ attributes.title }
						onChange={ ( title ) => setAttributes( { title } ) }
						placeholder={ __( 'Block Title', 'gutenberg' ) }
					/>
					<RichText
						className=''
						tagName="h5"
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
			</div>
		</div>
	);
}

import { __ } from '@wordpress/i18n';
import { useBlockProps } from '@wordpress/block-editor';
import './style.scss';

import { RichText } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes, className } ) {
	const blockProps = useBlockProps();
	return (
		<div { ...blockProps }>
			<div className='container'>
				<RichText
					className='h2-style'
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
			</div>
		</div>
	);
}

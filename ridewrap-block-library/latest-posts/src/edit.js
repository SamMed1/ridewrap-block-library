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
					tagName="h2"
					value={ attributes.title }
					onChange={ ( title ) => setAttributes( { title } ) }
					placeholder={ __( 'Block Title', 'gutenberg' ) }
				/>
				<p>{ __( 'No preview available: This is a dynamic block that renders your latest posts on the front end.', 'gutenberg' ) }</p>
			</div>
		</div>
	);
}

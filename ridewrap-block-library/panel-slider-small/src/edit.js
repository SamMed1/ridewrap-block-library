import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './style.scss';

const TEMPLATE = [ [ 'ridewrap-block/panel-small' ] ];

import { RichText } from '@wordpress/block-editor';

export default function Edit( { attributes, setAttributes, className } ) {
	const blockProps = useBlockProps();
	return (
		<div { ...blockProps }>
			<div className='container'>
				<RichText
					className='h3-style'
					tagName="h3"
					value={ attributes.title }
					onChange={ ( title ) => setAttributes( { title } ) }
					placeholder={ __( 'Block Title', 'gutenberg' ) }
				/>
				<InnerBlocks
					template={ TEMPLATE }
					allowedBlocks={ [
						'ridewrap-block/panel-small',
						'ridewrap-block/tab-quicklink',
					] }
				/>
			</div>
		</div>
	);
}

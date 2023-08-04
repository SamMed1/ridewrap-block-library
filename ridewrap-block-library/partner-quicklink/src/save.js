import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();

	const locations = function() {
		if ( attributes.partner_description ) {
			return (
				<span> { attributes.partner_description } </span>
			);
		} else {
			return (
				<p>No region defined.</p>
			)
		}
	}

	return (
		<div { ...blockProps }>
			<a target="_blank" rel="noopener noreferrer" href={ attributes.partner_link_url }>
				<h3 className='partner-name'> { attributes.partner_name } </h3>
				<InnerBlocks.Content />
				<p>Regions: { locations() }</p>
				<h4 className='h5-style'>
					{ attributes.partner_link_text } 
				</h4>
			</a>
		</div>
	);
}

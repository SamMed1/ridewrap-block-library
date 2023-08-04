import { __ } from '@wordpress/i18n';
import { RichText, useBlockProps } from '@wordpress/block-editor';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();

	const item1 = function() {
		if ( attributes.item_1_text ) {
			return (
				<li>
					<RichText.Content tagName="a" className="h5-style" href={ attributes.item_1_link } value={ attributes.item_1_text } />
				</li>
			)
		}
	}
	const item2 = function() {
		if ( attributes.item_2_text ) {
			return (
				<li>
					<RichText.Content tagName="a" className="h5-style" href={ attributes.item_2_link } value={ attributes.item_2_text } />
				</li>
			)
		}
	}
	const item3 = function() {
		if ( attributes.item_3_text ) {
			return (
				<li>
					<RichText.Content tagName="a" className="h5-style" href={ attributes.item_3_link } value={ attributes.item_3_text } />
				</li>
			)
		}
	}
	const item4 = function() {
		if ( attributes.item_4_text ) {
			return (
				<li>
					<RichText.Content tagName="a" className="h5-style" href={ attributes.item_4_link } value={ attributes.item_4_text } />
				</li>
			)
		}
	}
	const item5 = function() {
		if ( attributes.item_5_text ) {
			return (
				<li>
					<RichText.Content tagName="a" className="h5-style" href={ attributes.item_5_link } value={ attributes.item_5_text } />
				</li>
			)
		}
	}
	const item6 = function() {
		if ( attributes.item_6_text ) {
			return (
				<li>
					<RichText.Content tagName="a" className="h5-style" href={ attributes.item_6_link } value={ attributes.item_6_text } />
				</li>
			)
		}
	}

	return (
		<div { ...blockProps }>
			<div className='container container-wide container-flex-wrap'>
				<ul>
					{ item1() }
					{ item2() }
					{ item3() }
					{ item4() }
					{ item5() }
					{ item6() }
				</ul>
			</div>
		</div>
	);
}

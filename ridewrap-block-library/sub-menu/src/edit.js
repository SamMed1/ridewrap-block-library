import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText } from '@wordpress/block-editor';
import './style.scss';

export default function Edit( { attributes, setAttributes, className } ) {
	const blockProps = useBlockProps();

	return (
		<div { ...blockProps }>
			<div className='container'>
				<div class='row'>
					<RichText
						className=''
						tagName="p"
						value={ attributes.item_1_text }
						onChange={ ( item_1_text ) => setAttributes( { item_1_text } ) }
						placeholder={ __( 'Item text', 'gutenberg' ) }
					/>
					<RichText
						className=''
						tagName="p"
						value={ attributes.item_1_link }
						onChange={ ( item_1_link ) => setAttributes( { item_1_link } ) }
						placeholder={ __( 'Item link', 'gutenberg' ) }
					/>
				</div>
				<div class='row'>
					<RichText
						className=''
						tagName="p"
						value={ attributes.item_2_text }
						onChange={ ( item_2_text ) => setAttributes( { item_2_text } ) }
						placeholder={ __( 'Item text', 'gutenberg' ) }
					/>
					<RichText
						className=''
						tagName="p"
						value={ attributes.item_2_link }
						onChange={ ( item_2_link ) => setAttributes( { item_2_link } ) }
						placeholder={ __( 'Item link', 'gutenberg' ) }
					/>
				</div>
				<div class='row'>
					<RichText
						className=''
						tagName="p"
						value={ attributes.item_3_text }
						onChange={ ( item_3_text ) => setAttributes( { item_3_text } ) }
						placeholder={ __( 'Item text', 'gutenberg' ) }
					/>
					<RichText
						className=''
						tagName="p"
						value={ attributes.item_3_link }
						onChange={ ( item_3_link ) => setAttributes( { item_3_link } ) }
						placeholder={ __( 'Item link', 'gutenberg' ) }
					/>
				</div>
				<div class='row'>
					<RichText
						className=''
						tagName="p"
						value={ attributes.item_4_text }
						onChange={ ( item_4_text ) => setAttributes( { item_4_text } ) }
						placeholder={ __( 'Item text', 'gutenberg' ) }
					/>
					<RichText
						className=''
						tagName="p"
						value={ attributes.item_4_link }
						onChange={ ( item_4_link ) => setAttributes( { item_4_link } ) }
						placeholder={ __( 'Item link', 'gutenberg' ) }
					/>
				</div>
				<div class='row'>
					<RichText
						className=''
						tagName="p"
						value={ attributes.item_5_text }
						onChange={ ( item_5_text ) => setAttributes( { item_5_text } ) }
						placeholder={ __( 'Item text', 'gutenberg' ) }
					/>
					<RichText
						className=''
						tagName="p"
						value={ attributes.item_5_link }
						onChange={ ( item_5_link ) => setAttributes( { item_5_link } ) }
						placeholder={ __( 'Item link', 'gutenberg' ) }
					/>
				</div>
				<div class='row'>
					<RichText
						className=''
						tagName="p"
						value={ attributes.item_6_text }
						onChange={ ( item_6_text ) => setAttributes( { item_6_text } ) }
						placeholder={ __( 'Item text', 'gutenberg' ) }
					/>
					<RichText
						className=''
						tagName="p"
						value={ attributes.item_6_link }
						onChange={ ( item_6_link ) => setAttributes( { item_6_link } ) }
						placeholder={ __( 'Item link', 'gutenberg' ) }
					/>
				</div>
			</div>
		</div>
	);
}
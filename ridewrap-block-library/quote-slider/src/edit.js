import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';
import './style.scss';
import { Button } from '@wordpress/components'

import { RichText, MediaUpload } from '@wordpress/block-editor';

const ALLOWED_MEDIA_TYPES = [ 'image' ];

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
				<RichText
					className='link-style'
					tagName="p"
					value={ attributes.link }
					onChange={ ( link ) => setAttributes( { link } ) }
					placeholder={ __( 'See more button link address', 'gutenberg' ) }
				/>

				<div className='quote-item-group'>
					<div className='quote-item-group-row'>
						<MediaUpload
							// value={value}
							allowedTypes={ALLOWED_MEDIA_TYPES}
							onSelect={ ( media ) =>
								{ setAttributes( { quote_1_media_url: media.url } ); }
				
							}
							render={ ( { open } ) => (
								<Button onClick={ open }>Choose brand logo</Button>
							) }
						/>
						<img src={attributes.quote_1_media_url}/>
					</div>
					<div className='quote-item-group-row'>
						<MediaUpload
							// value={value}
							allowedTypes={ALLOWED_MEDIA_TYPES}
							onSelect={ ( media ) =>
								{ setAttributes( { quote_1_cover_url: media.url } ); }
				
							}
							render={ ( { open } ) => (
								<Button onClick={ open }>Choose cover image</Button>
							) }
						/>
						<img src={attributes.quote_1_cover_url}/>
					</div>
					<div className='quote-item-group-row'>
						<RichText
							className=''
							tagName="p"
							value={ attributes.quote_1_text }
							onChange={ ( quote_1_text ) => setAttributes( { quote_1_text } ) }
							placeholder={ __( 'Quote text', 'gutenberg' ) }
						/>
					</div>
					<div className='quote-item-group-row'>
						<RichText
							className=''
							tagName="p"
							value={ attributes.quote_1_link }
							onChange={ ( quote_1_link ) => setAttributes( { quote_1_link } ) }
							placeholder={ __( 'Media link', 'ridewrap' ) }
						/>
					</div>
				</div>
				<div className='quote-item-group'>
					<div className='quote-item-group-row'>
						<MediaUpload
							// value={value}
							allowedTypes={ALLOWED_MEDIA_TYPES}
							onSelect={ ( media ) =>
								{ setAttributes( { quote_2_media_url: media.url } ); }
				
							}
							render={ ( { open } ) => (
								<Button onClick={ open }>Choose brand logo</Button>
							) }
						/>
						<img src={attributes.quote_2_media_url}/>
					</div>
					<div className='quote-item-group-row'>
						<MediaUpload
							// value={value}
							allowedTypes={ALLOWED_MEDIA_TYPES}
							onSelect={ ( media ) =>
								{ setAttributes( { quote_2_cover_url: media.url } ); }
				
							}
							render={ ( { open } ) => (
								<Button onClick={ open }>Choose cover image</Button>
							) }
						/>
						<img src={attributes.quote_2_cover_url}/>
					</div>
					<div className='quote-item-group-row'>
						<RichText
							className=''
							tagName="p"
							value={ attributes.quote_2_text }
							onChange={ ( quote_2_text ) => setAttributes( { quote_2_text } ) }
							placeholder={ __( 'Quote text', 'gutenberg' ) }
						/>
					</div>
					<div className='quote-item-group-row'>
						<RichText
							className=''
							tagName="p"
							value={ attributes.quote_2_link }
							onChange={ ( quote_2_link ) => setAttributes( { quote_2_link } ) }
							placeholder={ __( 'Media link', 'ridewrap' ) }
						/>
					</div>
				</div>
				<div className='quote-item-group'>
					<div className='quote-item-group-row'>
						<MediaUpload
							// value={value}
							allowedTypes={ALLOWED_MEDIA_TYPES}
							onSelect={ ( media ) =>
								{ setAttributes( { quote_3_media_url: media.url } ); }
				
							}
							render={ ( { open } ) => (
								<Button onClick={ open }>Choose brand logo</Button>
							) }
						/>
						<img src={attributes.quote_3_media_url}/>
					</div>
					<div className='quote-item-group-row'>
						<MediaUpload
							// value={value}
							allowedTypes={ALLOWED_MEDIA_TYPES}
							onSelect={ ( media ) =>
								{ setAttributes( { quote_3_cover_url: media.url } ); }
				
							}
							render={ ( { open } ) => (
								<Button onClick={ open }>Choose cover image</Button>
							) }
						/>
						<img src={attributes.quote_3_cover_url}/>
					</div>
					<div className='quote-item-group-row'>
						<RichText
							className=''
							tagName="p"
							value={ attributes.quote_3_text }
							onChange={ ( quote_3_text ) => setAttributes( { quote_3_text } ) }
							placeholder={ __( 'Quote text', 'gutenberg' ) }
						/>
					</div>
					<div className='quote-item-group-row'>
						<RichText
							className=''
							tagName="p"
							value={ attributes.quote_3_link }
							onChange={ ( quote_3_link ) => setAttributes( { quote_3_link } ) }
							placeholder={ __( 'Media link', 'ridewrap' ) }
						/>
					</div>
				</div>
				<div className='quote-item-group'>
					<div className='quote-item-group-row'>
						<MediaUpload
							// value={value}
							allowedTypes={ALLOWED_MEDIA_TYPES}
							onSelect={ ( media ) =>
								{ setAttributes( { quote_4_media_url: media.url } ); }
				
							}
							render={ ( { open } ) => (
								<Button onClick={ open }>Choose brand logo</Button>
							) }
						/>
						<img src={attributes.quote_4_media_url}/>
					</div>
					<div className='quote-item-group-row'>
						<MediaUpload
							// value={value}
							allowedTypes={ALLOWED_MEDIA_TYPES}
							onSelect={ ( media ) =>
								{ setAttributes( { quote_4_cover_url: media.url } ); }
				
							}
							render={ ( { open } ) => (
								<Button onClick={ open }>Choose cover image</Button>
							) }
						/>
						<img src={attributes.quote_4_cover_url}/>
					</div>
					<div className='quote-item-group-row'>
						<RichText
							className=''
							tagName="p"
							value={ attributes.quote_4_text }
							onChange={ ( quote_4_text ) => setAttributes( { quote_4_text } ) }
							placeholder={ __( 'Quote text', 'gutenberg' ) }
						/>
					</div>
					<div className='quote-item-group-row'>
						<RichText
							className=''
							tagName="p"
							value={ attributes.quote_4_link }
							onChange={ ( quote_4_link ) => setAttributes( { quote_4_link } ) }
							placeholder={ __( 'Media link', 'ridewrap' ) }
						/>
					</div>
				</div>
				<div className='quote-item-group'>
					<div className='quote-item-group-row'>
						<MediaUpload
							// value={value}
							allowedTypes={ALLOWED_MEDIA_TYPES}
							onSelect={ ( media ) =>
								{ setAttributes( { quote_5_media_url: media.url } ); }
				
							}
							render={ ( { open } ) => (
								<Button onClick={ open }>Choose brand logo</Button>
							) }
						/>
						<img src={attributes.quote_5_media_url}/>
					</div>
					<div className='quote-item-group-row'>
						<MediaUpload
							// value={value}
							allowedTypes={ALLOWED_MEDIA_TYPES}
							onSelect={ ( media ) =>
								{ setAttributes( { quote_5_cover_url: media.url } ); }
				
							}
							render={ ( { open } ) => (
								<Button onClick={ open }>Choose cover image</Button>
							) }
						/>
						<img src={attributes.quote_5_cover_url}/>
					</div>
					<div className='quote-item-group-row'>
						<RichText
							className=''
							tagName="p"
							value={ attributes.quote_5_text }
							onChange={ ( quote_5_text ) => setAttributes( { quote_5_text } ) }
							placeholder={ __( 'Quote text', 'gutenberg' ) }
						/>
					</div>
					<div className='quote-item-group-row'>
						<RichText
							className=''
							tagName="p"
							value={ attributes.quote_5_link }
							onChange={ ( quote_5_link ) => setAttributes( { quote_5_link } ) }
							placeholder={ __( 'Media link', 'ridewrap' ) }
						/>
					</div>
				</div>
				<div className='quote-item-group'>
					<div className='quote-item-group-row'>
						<MediaUpload
							// value={value}
							allowedTypes={ALLOWED_MEDIA_TYPES}
							onSelect={ ( media ) =>
								{ setAttributes( { quote_6_media_url: media.url } ); }
				
							}
							render={ ( { open } ) => (
								<Button onClick={ open }>Choose brand logo</Button>
							) }
						/>
						<img src={attributes.quote_6_media_url}/>
					</div>
					<div className='quote-item-group-row'>
						<MediaUpload
							// value={value}
							allowedTypes={ALLOWED_MEDIA_TYPES}
							onSelect={ ( media ) =>
								{ setAttributes( { quote_6_cover_url: media.url } ); }
				
							}
							render={ ( { open } ) => (
								<Button onClick={ open }>Choose cover image</Button>
							) }
						/>
						<img src={attributes.quote_6_cover_url}/>
					</div>
					<div className='quote-item-group-row'>
						<RichText
							className=''
							tagName="p"
							value={ attributes.quote_6_text }
							onChange={ ( quote_6_text ) => setAttributes( { quote_6_text } ) }
							placeholder={ __( 'Quote text', 'gutenberg' ) }
						/>
					</div>
					<div className='quote-item-group-row'>
						<RichText
							className=''
							tagName="p"
							value={ attributes.quote_6_link }
							onChange={ ( quote_6_link ) => setAttributes( { quote_6_link } ) }
							placeholder={ __( 'Media link', 'ridewrap' ) }
						/>
					</div>
				</div>

			</div>
		</div>
	);
}

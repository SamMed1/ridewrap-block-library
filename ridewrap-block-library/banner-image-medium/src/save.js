import { __ } from '@wordpress/i18n';
import { RichText, InnerBlocks, useBlockProps } from '@wordpress/block-editor';

import imageLogo from './assets/rw-logo-gradient.png';

import { RawHTML } from '@wordpress/element';

export default function save( { attributes } ) {
	const blockProps = useBlockProps.save();

	const homeUrl = window.location.origin;

	const superCheckerEl = function() {

		const myShortcode = '[ridewrap-super-checker]';

		if ( attributes.super_checker_show == true ) {
			return (
				<div className={ 'block-super-checker' }>
					<RawHTML>{ myShortcode }</RawHTML>
				</div>
			);
		} else {
			return;
		}
	}

	const ctaBtn = function() {
		if ( attributes.super_checker_show == true ) {
			return (
				<RichText.Content tagName="a" id="js-banner-reveal-super-checker" className="h4-style btn grey-dark" value={ attributes.cta_text } />
			);
		} else {
			return (
				<RichText.Content tagName="a" href={ attributes.cta_link } className="h4-style btn grey-dark" value={ attributes.cta_text } />
			)
		}
	}

	return (
		<div>
			<div { ...blockProps }>
				<InnerBlocks.Content />
				<div class="container">
					<div class="block-internal">
						<a href={ homeUrl }>
							<img height="146" width="275" src={ imageLogo } alt="Ridewrap logo" />
						</a>
						<div class="block-page-name">
							<RichText.Content tagName="h1" className="h1-style text-white" value={ attributes.title } />
							<RichText.Content tagName="h2" className="h5-style text-white" value={ attributes.subtitle } />
							{ ctaBtn() }
						</div>
					</div>
				</div>
			</div>
			{ superCheckerEl() }
		</div>
	);
}

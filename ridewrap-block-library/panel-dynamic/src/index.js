import { registerBlockType } from '@wordpress/blocks';
import './style.scss';
import { InnerBlocks } from '@wordpress/block-editor';

import Edit from './edit';
import attributes from './attributes';

registerBlockType( 'ridewrap-block/panel-dynamic', {
	attributes,
	edit: Edit,
	save: () => <InnerBlocks.Content />
} );

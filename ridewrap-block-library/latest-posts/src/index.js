import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import attributes from './attributes';
import Edit from './edit';

registerBlockType( 'ridewrap-block/latest-posts', {
	attributes,
	edit: Edit,
	save: () => null,
} );

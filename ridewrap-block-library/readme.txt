=== Gutenberg Blocks Plugin ===
Contributors:      Sam Medhurst
Tags:              block
Tested up to:      5.9
Stable tag:        0.0.1
License:           test-license
License URI:       https://www.gnu.org/licenses/gpl-2.0.html

Sams tester

== To create a new block ==

[1] cd to the plugin root.
[2] Run 'npx @wordpress/create-block block-name'
[3] Open block attributes at [block-directory]/src/block.json.
    - Change block name to have prefix 'ridewrap-block/'.
    - Change block category to 'ridewrap-blocks'.
[4] Register the block at ridewrap-block-library-plugin.php, using the register_block_type() method.
    - Keep in mind that block registry happens on 'init' so you need to reactivate the plugin for new block to be useable.
[5] Delete src/editor.scss. We will be using a single css file for each block to be as dev-friendly as possible.
[6] Copy boilerplate /src/ structure from 'panel-slider-small' block.
    - This will also mean creating an 'attributes.js' file, in the src/ directory.
    - Change the js block registry reference in 'index.js' to use the correct block name.

== Development and Deployment ==

[1] Plugin Development:

Most of the required build scripts are stored in the individual block folders, however because all blocks use a css file for 
'shared' components, we require an npm script to be run during development for css compiling. The script compiles sass in the
/assets/css/_shared.scss file into /assets/css/shared-css-compiled.css file. This compiled file is then enqueued using 
functionality located in the ridewrap-block-library.php file.

'cd [plugin]'
'npm run watch' runs sass compiler script.

[2] Block Development:

Block development is done individually. Each block should be approached as an individual project of it's own, unrelated to the 
other blocks. The only thing all the blocks have in common is the use of the shared js and css files, stored in the /assets folder. 
Usage of the shared css file is explained above.

The nature of block development means we need to run block build scripts individually rather than a single script that 
compiles all blocks at the same time.

'cd [block]'
'npm install'
'npm start' runs development scripts ( run this when building )
'npm run build' runs build scripts

== Helpful Info ==

'npm start' gives us a live update for CSS development, but NOT the html structure.

To see your new block html structure, you need to:
- 'npm run build' after changing structure.
- remove and re-add block to page in admin, save, then refresh front end.

To deploy, run 'npm run build' and commit result.

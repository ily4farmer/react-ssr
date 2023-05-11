const path = require('path');

const createWebpackAliases = () => ({
	'@components': path.resolve(__dirname, '../src/components'),
	'@models': path.resolve(__dirname, '../src/models'),
	'@store': path.resolve(__dirname, '../src/store'),
	'@shared': path.resolve(__dirname, '../src/shared'),
	'@styles': path.resolve(__dirname, '../src/styles'),
	'@pages': path.resolve(__dirname, '../src/pages'),
	'@hooks': path.resolve(__dirname, '../src/hooks'),
	'@routes': path.resolve(__dirname, '../src/routes')
});

module.exports = {
	createWebpackAliases
};

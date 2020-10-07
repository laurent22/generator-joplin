import joplin from 'api/index';

joplin.plugins.register({
	onStart: async function() {
		alert('Test plugin started');
	},
});

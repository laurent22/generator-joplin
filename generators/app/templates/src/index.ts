import joplin from 'api';

joplin.plugins.register({
	onStart: async function() {
		alert('Test plugin started');
	},
});

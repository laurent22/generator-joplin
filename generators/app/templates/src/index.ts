import joplin from 'joplin';

joplin.plugins.register({
	onStart: async function() {
		alert('Test plugin started');
	},
});

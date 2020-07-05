'use strict';

const Generator = require('yeoman-generator');
const chalk = require('chalk');
const yosay = require('yosay');

module.exports = class extends Generator {
	prompting() {
		this.log(yosay(`Welcome to the fine ${chalk.red('generator-joplin')} generator!`));

		const prompts = [
			{
				type: 'input',
				name: 'pluginName',
				message: 'Plugin name:'
			},
			{
				type: 'input',
				name: 'pluginAuthor',
				message: 'Author:'
			},
			{
				type: 'input',
				name: 'pluginHomepageUrl',
				message: 'Homepage URL:'
			}
		];

		return this.prompt(prompts).then(props => {
			this.props = props;
		});
	}

	writing() {
		const files = [
			'.gitignore',
			'global.d.ts',
			'package.json',
			'README.md',
			'tsconfig.json',
			'webpack.config.js',
			'src/index.ts',
			'src/manifest.json',
		];

		for (const file of files) {
			this.fs.copyTpl(
				this.templatePath(file),
				this.destinationPath(file),
				this.props
			);
		}
	}

	install() {
		this.installDependencies({
			npm: true,
			bower: false,
			yarn: false
		});
	}
};

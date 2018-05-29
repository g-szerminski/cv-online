const content = {
	title: 'Curiculum Vitae',
	header: 'Header',
	about: 'About Me',
	skils: 'Skils',
	language: 'Languages',
	education: 'Education',
	courses: 'Additional courses',
	interests: 'Interests',
	footer: 'Permition'

}
const cv = React.createElement ('div', {},
			React.createElement ('h3', {}, content.title + 'Curiculum');
	);

const appRoot = document.getElementById('app');
ReactDOM.render(cv, appRoot);
//ReactDOM.render(template, appRoot);
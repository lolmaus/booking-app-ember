import Ember from 'ember';

export default Ember.Controller.extend({
	
	actions: {
		signIn: function(provider) {
			let controller = this;
			this.get('session').open('firebase', {
				provider: provider,
				email: this.get('email') || '',
				password: this.get('password') || '',
			}).then(() => {
				controller.set('email', null);
				controller.set('password', null);
				controller.transitionToRoute('home');
			}, (error) => {
				this.set('errorMessage', 'Invalid email and password combination :(');
			});
		}
	}
});
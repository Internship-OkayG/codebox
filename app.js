const { Splitpanes, Pane } = splitpanes;

new Vue({
	el: '#app',
	components: { Splitpanes, Pane },
	data() {
		return {
			darkTheme: true,
		};
	},
});

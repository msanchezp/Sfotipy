var Backbone = require('backbone'),
	AlbumView = require('../views/album'),
	$ = require('jquery');


module.exports = Backbone.View.extend({
	el: $('#albums'),

	initialize: function(){
		this.listenTo(this.collection, "add", this.addOne, this);
	},

	render: function(){
		this.collection.forEach(this.addOne, this);
	},

	addOne: function(album){
		var albumView = new AlbumView({model: album});
		this.$el.append(albumView.render().el);
	}
});
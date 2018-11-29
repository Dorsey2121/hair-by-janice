$( document ).ready(function() {

var userfeed = new Instafeed({
get: 'user',
userId: '',
limit: 12,
resolution: 'standard_resolution',
accessToken: '',
sortBy: 'most-recent',
template: '<div class="gallery"><a href="{{image}}" title="{{caption}}" target="_blank"><img src="{{image}}" alt="{{caption}}" class="img-fluid"/></a></div>',
});
userFeed.run();


});

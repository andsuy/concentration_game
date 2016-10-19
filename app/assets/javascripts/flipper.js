
var flips = 0;
var fontawesome = ["fa-caret-right", "fa-arrow-right", "fa-fast-backward", "fa-ellipsis-h", "fa-shopping-cart", "fa-mars", "fa-buysellads", "fa-expand", "fa-graduation-cap", "fa-crop", "fa-undo", "fa-trash-o", "fa-clock-o", "fa-server", "fa-terminal", "fa-upload", "fa-hand-o-right", "fa-inbox", "fa-lightbulb-o", "fa-moon-o", "fa-thumb-tack", "fa-facebook-f", "fa-gratipay", "fa-css3", "fa-calendar-o", "fa-print", "fa-align-right", "fa-align-center", "fa-dollar", "fa-volume-off", "fa-deviantart", "fa-eur", "fa-ellipsis-v", "fa-soundcloud", "fa-sliders", "fa-linkedin-square", "fa-ban", "fa-flag", "fa-headphones", "fa-genderless", "fa-chevron-right", "fa-bookmark-o", "fa-stumbleupon", "fa-floppy-o", "fa-wifi", "fa-bold", "fa-bell-slash", "fa-copyright", "fa-superscript", "fa-cubes", "fa-external-link-square", "fa-krw", "fa-paperclip", "fa-group", "fa-dot-circle-o", "fa-outdent", "fa-gears", "fa-bitcoin", "fa-sort-alpha-asc", "fa-flask", "fa-rmb", "fa-instagram", "fa-inr", "fa-twitter", "fa-bug", "fa-qrcode", "fa-eye", "fa-female", "fa-minus-circle", "fa-institution", "fa-question", "fa-arrow-down", "fa-chevron-circle-down", "fa-ils", "fa-foursquare", "fa-money", "fa-scissors", "fa-toggle-down", "fa-underline", "fa-google-wallet", "fa-mobile-phone", "fa-bullseye", "fa-plus-square", "fa-power-off", "fa-html5", "fa-bar-chart-o", "fa-star-o", "fa-heartbeat", "fa-fire-extinguisher", "fa-file-word-o", "fa-archive", "fa-street-view", "fa-file-powerpoint-o", "fa-bookmark", "fa-image", "fa-futbol-o", "fa-long-arrow-right", "fa-adjust", "fa-star-half-empty", "fa-wheelchair", "fa-ambulance", "fa-life-saver", "fa-trash", "fa-suitcase", "fa-unsorted", "fa-motorcycle", "fa-legal", "fa-film", "fa-toggle-right", "fa-desktop", "fa-camera-retro", "fa-arrow-circle-o-right", "fa-unlink", "fa-folder-open", "fa-newspaper-o", "fa-step-backward", "fa-folder-o", "fa-cab", "fa-bitbucket-square", "fa-code-fork", "fa-slideshare", "fa-text-width", "fa-rss", "fa-files-o", "fa-adn", "fa-flash", "fa-glass", "fa-btc", "fa-thumbs-o-up", "fa-building-o", "fa-spotify", "fa-rub", "fa-backward", "fa-venus-mars", "fa-file-archive-o", "fa-video-camera", "fa-search-minus", "fa-git-square", "fa-caret-down", "fa-lock", "fa-wrench", "fa-certificate", "fa-times-circle-o", "fa-yen", "fa-sort-alpha-desc", "fa-angle-double-down", "fa-cc-visa", "fa-openid", "fa-info-circle", "fa-chevron-circle-left", "fa-mail-reply-all", "fa-envelope-square", "fa-h-square", "fa-pie-chart", "fa-connectdevelop", "fa-file-code-o", "fa-caret-square-o-left", "fa-rocket", "fa-edit", "fa-info", "fa-flickr", "fa-eyedropper", "fa-cc-discover", "fa-send-o", "fa-key", "fa-try", "fa-drupal", "fa-heart", "fa-level-up", "fa-cloud-download", "fa-play-circle", "fa-sun-o", "fa-sort", "fa-pencil-square-o", "fa-repeat", "fa-at", "fa-external-link", "fa-pied-piper-alt", "fa-cc", "fa-linkedin", "fa-stethoscope", "fa-calculator", "fa-pinterest-square", "fa-question-circle", "fa-leanpub", "fa-sitemap", "fa-angle-right", "fa-fighter-jet", "fa-paper-plane-o", "fa-hand-o-up", "fa-building", "fa-bed", "fa-file-audio-o", "fa-dashboard", "fa-birthday-cake", "fa-refresh", "fa-ruble", "fa-angle-double-up", "fa-copy", "fa-plane", "fa-cut", "fa-globe", "fa-fire", "fa-train", "fa-file", "fa-star-half", "fa-stumbleupon-circle", "fa-tag", "fa-umbrella", "fa-bolt", "fa-flag-checkered", "fa-bus", "fa-tags", "fa-list", "fa-gbp", "fa-circle-thin", "fa-anchor", "fa-eye-slash", "fa-reply", "fa-won", "fa-arrow-circle-o-left", "fa-play", "fa-share-alt-square", "fa-sort-asc", "fa-arrow-circle-left", "fa-forward", "fa-location-arrow", "fa-eraser", "fa-youtube-square", "fa-tint", "fa-file-movie-o", "fa-reddit-square", "fa-header", "fa-pause", "fa-magnet", "fa-bomb", "fa-signal", "fa-rss-square", "fa-file-video-o", "fa-xing-square", "fa-puzzle-piece", "fa-medkit", "fa-tachometer", "fa-area-chart", "fa-volume-down", "fa-venus-double", "fa-minus", "fa-file-text-o", "fa-euro", "fa-mail-forward", "fa-arrow-circle-right", "fa-spinner", "fa-chevron-up", "fa-search-plus", "fa-asterisk", "fa-twitter-square", "fa-beer", "fa-mortar-board", "fa-github-square", "fa-comment-o", "fa-square", "fa-truck", "fa-hospital-o", "fa-check-circle", "fa-share-square-o", "fa-file-text", "fa-magic", "fa-exclamation", "fa-skype", "fa-jsfiddle", "fa-dribbble", "fa-sort-numeric-asc", "fa-hotel", "fa-ioxhost", "fa-life-buoy", "fa-link", "fa-medium", "fa-vk", "fa-cc-mastercard", "fa-chain", "fa-bitbucket", "fa-align-justify", "fa-recycle", "fa-barcode", "fa-slack", "fa-thumbs-down", "fa-whatsapp", "fa-unlock", "fa-steam", "fa-line-chart", "fa-step-forward", "fa-pagelines", "fa-hand-o-down", "fa-empire", "fa-long-arrow-down", "fa-columns", "fa-code", "fa-sign-in", "fa-fax", "fa-align-left", "fa-twitch", "fa-sort-amount-asc", "fa-quote-left", "fa-caret-left", "fa-download", "fa-viacoin", "fa-envelope", "fa-circle-o", "fa-qq", "fa-sort-down", "fa-exchange", "fa-reply-all", "fa-chevron-circle-right", "fa-arrow-circle-up", "fa-flag-o", "fa-share-square", "fa-mars-stroke", "fa-comments-o", "fa-smile-o", "fa-rouble", "fa-arrow-circle-o-up", "fa-digg", "fa-diamond", "fa-paper-plane", "fa-stop", "fa-jpy", "fa-gear", "fa-space-shuttle", "fa-behance-square", "fa-paw", "fa-yelp", "fa-rebel", "fa-xing", "fa-long-arrow-left", "fa-history", "fa-star", "fa-gamepad", "fa-user", "fa-check-square", "fa-user-times", "fa-renren", "fa-table", "fa-support", "fa-cart-plus", "fa-envelope-o", "fa-turkish-lira", "fa-rotate-right", "fa-tablet", "fa-caret-square-o-up", "fa-exclamation-triangle", "fa-mars-double", "fa-subway", "fa-trello", "fa-sort-amount-desc", "fa-arrow-circle-down", "fa-forumbee", "fa-save", "fa-pied-piper", "fa-cc-amex", "fa-long-arrow-up", "fa-joomla", "fa-dashcube", "fa-wordpress", "fa-github", "fa-caret-up", "fa-thumbs-o-down", "fa-fast-forward", "fa-th-list", "fa-file-o", "fa-file-excel-o", "fa-hdd-o", "fa-google-plus", "fa-angle-up", "fa-pinterest-p", "fa-toggle-up", "fa-italic", "fa-ticket", "fa-sort-numeric-desc", "fa-cutlery", "fa-level-down", "fa-play-circle-o", "fa-calendar", "fa-delicious", "fa-git", "fa-mars-stroke-v", "fa-share", "fa-angle-down", "fa-phone", "fa-sort-up", "fa-share-alt", "fa-university", "fa-comment", "fa-automobile", "fa-warning", "fa-cart-arrow-down", "fa-toggle-off", "fa-bell-slash-o", "fa-lastfm-square", "fa-mercury", "fa-cc-stripe", "fa-circle-o-notch", "fa-sort-desc", "fa-maxcdn", "fa-codepen", "fa-pencil-square", "fa-quote-right", "fa-sign-out", "fa-list-ul", "fa-comments", "fa-transgender-alt", "fa-shirtsinbulk", "fa-close", "fa-shield", "fa-chevron-down", "fa-language", "fa-check-circle-o", "fa-volume-up", "fa-th", "fa-youtube-play", "fa-plus-square-o", "fa-steam-square", "fa-binoculars", "fa-lemon-o", "fa-coffee", "fa-toggle-on", "fa-facebook-square", "fa-chevron-left", "fa-user-secret", "fa-microphone", "fa-search", "fa-meh-o", "fa-life-ring", "fa-laptop", "fa-reddit", "fa-yahoo", "fa-navicon", "fa-arrow-up", "fa-database", "fa-subscript", "fa-paint-brush", "fa-picture-o", "fa-circle", "fa-check", "fa-angellist", "fa-wechat", "fa-arrows-h", "fa-remove", "fa-stack-exchange", "fa-check-square-o", "fa-caret-square-o-right", "fa-heart-o", "fa-credit-card", "fa-android", "fa-arrows-alt", "fa-google", "fa-times", "fa-toggle-left", "fa-weixin", "fa-trophy", "fa-transgender", "fa-random", "fa-list-alt", "fa-soccer-ball-o", "fa-taxi", "fa-vimeo-square", "fa-apple", "fa-cloud-upload", "fa-cube", "fa-paste", "fa-sellsy", "fa-list-ol", "fa-child", "fa-folder", "fa-chain-broken", "fa-pinterest", "fa-simplybuilt", "fa-github-alt", "fa-usd", "fa-paragraph", "fa-pencil", "fa-tasks", "fa-folder-open-o", "fa-arrow-circle-o-down", "fa-map-marker", "fa-cog", "fa-bullhorn", "fa-compress", "fa-cny", "fa-male", "fa-bank", "fa-plug", "fa-behance", "fa-youtube", "fa-camera", "fa-clipboard", "fa-music", "fa-weibo", "fa-unlock-alt", "fa-mobile", "fa-strikethrough", "fa-caret-square-o-down", "fa-spoon", "fa-vine", "fa-thumbs-up", "fa-gittip", "fa-minus-square", "fa-plus-circle", "fa-user-plus", "fa-briefcase", "fa-dedent", "fa-mail-reply", "fa-car", "fa-tree", "fa-plus", "fa-chevron-circle-up", "fa-font", "fa-arrow-left", "fa-file-sound-o", "fa-eject", "fa-bar-chart", "fa-ship", "fa-facebook-official", "fa-facebook", "fa-send", "fa-microphone-slash", "fa-cogs", "fa-tencent-weibo", "fa-file-pdf-o", "fa-bell-o", "fa-mars-stroke-h", "fa-file-photo-o", "fa-google-plus-square", "fa-sheqel", "fa-cc-paypal", "fa-filter", "fa-arrows-v", "fa-bell", "fa-hacker-news", "fa-dropbox", "fa-file-zip-o", "fa-th-large", "fa-tumblr", "fa-life-bouy", "fa-minus-square-o", "fa-retweet", "fa-crosshairs", "fa-linux", "fa-angle-double-left", "fa-keyboard-o", "fa-rupee", "fa-cloud", "fa-venus", "fa-leaf", "fa-photo", "fa-book", "fa-indent", "fa-phone-square", "fa-windows", "fa-users", "fa-skyatlas", "fa-angle-double-right", "fa-shekel", "fa-angle-left", "fa-home", "fa-tty", "fa-compass", "fa-neuter", "fa-gift", "fa-user-md", "fa-times-circle", "fa-meanpath", "fa-hand-o-left", "fa-exclamation-circle", "fa-frown-o", "fa-road", "fa-tumblr-square", "fa-lastfm", "fa-stack-overflow", "fa-arrows", "fa-text-height", "fa-bicycle", "fa-square-o", "fa-paypal"];

var total= 0;
var prev = 0;
var win = 0;
function flip(x) {
		
	$('#'+x).toggleClass('flipped');
	checkFlip(x);
}

function checkFlip(x)
{	
	//flips is checking to see if one card has been flipped before.  basically a boolean
  if (flips==1)
  {
  	//stop other clicks from happening when more than one card has been selected
  	$(document.body).toggleClass('stopClick');

  	//timeout to allow user to see card flip for 2 seconds before it flips back.  
  	setTimeout(function(){
  	if($('#'+x + ' > .back > i').attr('class')==$('#'+prev+' > .back > i').attr('class'))
  	{
  		//add to total to see how many successful matches there are.  once total = all cards, then game is done! 
			total+=2;
			checkWin();
  	}
  	else
  	{
  		//if the selection was wrong, flip it back over
			$('#'+x).toggleClass('flipped');
			$('#'+prev).toggleClass('flipped');
  	}
  	//after comparing two cards, return flips to 0 so that we can compare two others.
  	flips=0;
  	$(document.body).toggleClass('stopClick');
  	}, 2000);	
  }
	else
	{
		//if no cards previously flipped, save this card id.  Then, save flips to show that a card has been picked previously.
		prev = x;
		flips=1;
	}	
}

function checkWin()
{
	if(total==win)
		{
			if(confirm('You won!  Do you want to play again?')){
    		window.location.reload();  
			}

		}
}

function createCard(name, value){
/*creating the cards with a container, a card class, and a front and a back.
	initialized id by # in loop, as well as identify which card to flip with the flip function.  
	value is value of the font-awesome icon to use on the back.
*/
var lines = '<div class=" col-lg-3 col-md-3 col-sm-3"><div class="container">'
lines +=  '<div class="card" onclick="flip(' + name + ')"' + 'id="'+name+'">'
lines +=  '<div class="front"></div>'
lines +=  '<div class="back"><i class= "fa '+value + '"></i></div>'
lines +=  '</div>'
lines +=  '</div></div>'

return lines;

}


function init(num)
{
	//initialize the game.  There is string called lines to draw num amount of cards and instantiate it.  

	win = num;
	var lines = '<div class="row"><div class="col-md-8 col-md-offset-2">'
	var rng = Math.floor(Math.random() * (fontawesome.length - (num/2) -1))
	var values = fontawesome.slice(rng,rng+(num/2));
	values = values.concat(values);
	values = shuffle(values);

	for (var i = 0; i<num; i++)
	{
		lines += createCard(i, values[i]);
	}
	lines += '</div></div>';
	document.write(lines);
	checkFont();

}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

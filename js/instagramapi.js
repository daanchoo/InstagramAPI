//"https://api.instagram.com/oauth/authorize/?client_id=0d30bb9f30a540d8b822a39bb7521d24&redirect_uri=http://127.0.0.1:8081&response_type=token&scope=basic+public_content+comments+likes"

var clientID = "0d30bb9f30a540d8b822a39bb7521d24";
var ACCESS_TOKEN = "1243249297.0d30bb9.621fa57449094290a020a8b700f7ecf3";


var InstagramAPI = function() {
  var BASE_URL = "https://api.instagram.com/v1";

  var getTokenUrl = function(url) {
    return url + "?access_token=" + ACCESS_TOKEN;
  }

  var getUser = function(id, callback){
    $.ajax({
      url: getTokenUrl(BASE_URL + "/users/" + id),
      method: "GET",
      dataType: "jsonp",
      complete: callback
    });
  };

  var getRecentMedia = function(id, callback) {
    $.ajax({
      url: getTokenUrl(BASE_URL + "/users/" + id + "/media/recent"),
      method: "GET",
      dataType: "jsonp",
      complete: callback
    });
  }

  var searchUser = function(query, callback) {
    $.ajax({
      url: getTokenUrl(BASE_URL + "/users/search") + "&count=10&q=" + query,
      method: "GET",
      dataType: "jsonp",
      complete: callback
    });
  }

  var likeMedia = function(id, callback) {
    $.ajax({
      url: getTokenUrl(BASE_URL + "/media/" + id + "/likes"),
      method: "POST",
      dataType: "jsonp",
      complete: callback
    });
  }

  return {
    getUser: getUser,
    getRecentMedia: getRecentMedia,
    searchUser: searchUser,
    likeMedia: likeMedia
  }
}();

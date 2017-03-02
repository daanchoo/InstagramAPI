function displayUser(user) {
  var userContainer = document.getElementById("user");
  userContainer.innerHTML = `
    <div>
      <img src="${user.profile_picture}" />
      <p>${user.full_name}</p>
      <div>
        Follwers: <span>${user.counts.follows}</span><br>
        Photos: <span>${user.counts.media}</span>
      </div>
    </div>
  `;
}


function onLikeBtnClick(e) {
  var mediaId = e.target.attributes['data-mediaid'].value;
  InstagramAPI.likeMedia(mediaId, function(response, status) {
    
  });
};


function displayUserMedia(media) {
  var mediaContainer = document.getElementById("media");
  var thumbnails = [];
  media.forEach(function(item, i) {
    var thumbnail = `
      <div>
        <span class="likes">${item.likes.count}</span>
        <img src="${item.images.thumbnail.url}" />
        <button data-mediaid="${item.id}">Like</button>
      </div>
    `;
    thumbnails.push(thumbnail);
  });

  mediaContainer.innerHTML = thumbnails.join("");
}


InstagramAPI.getUser("self", function(response, status) {
  var userData = response.responseJSON.data;
  displayUser(userData);
});


InstagramAPI.getRecentMedia("self", function(response, status) {
  var media = response.responseJSON.data;
  displayUserMedia(media);
  $("[data-mediaid]").on('click', onLikeBtnClick)
});

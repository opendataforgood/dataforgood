var getThumbnailUrl = function(url) {
    var extractBase = 'http://api.embed.ly/1/extract';
    var embedlyKey = getSetting('embedlyId');
    try {
        if (!embedlyKey)
            throw new Error("Couldn't find an Embedly API key! Please add it to your Telescope settings.")
        var result = Meteor.http.get(extractBase, {
            params: {
                key: embedlyKey,
                url: url,
                image_width: 200
            }
        });

        if (!result.data.images.length) // we found a URL, but no images
            throw new Error("Couldn't find an image!");

        var thumbnailUrl = result.data.images[0].url;

        return thumbnailUrl;
    } catch (error) {
        console.log(error)
        return null;
    }
}


var extendPost = function(post) {
    if (post.url) { // not all posts have URLs!
        var thumbnailUrl = getThumbnailUrl(post.url);
        if (thumbnailUrl)
            post.thumbnailUrl = thumbnailUrl;
    }
    return post;
}

postSubmitServerCallbacks.push(extendPost);
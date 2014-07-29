Template[getTemplate('postThumbnail')].helpers({
    thumbnailUrl: function() {
        return !!this.url ? getOutgoingUrl(this.url) : "/posts/" + this._id;
    }
});
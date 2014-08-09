//* Helpers for the Social Media Share section
Template[getTemplate('postShare')].helpers({
    postUrl: function() {
        return getPostUrl(this._id);
    },
    viaTwitter: function() {
        return !!getSetting('twitterAccount') ? ' via ' + getSetting('twitterAccount') : '';
    },
    siteLink: function() {
        return Meteor.absoluteUrl();
    },
    facebookAppId: function() {
        //return !!getSetting('facebookAppId') ? getSetting('facebookAppId') : '';
        return "257294247797303"; //hardcoded fb api
    }

});
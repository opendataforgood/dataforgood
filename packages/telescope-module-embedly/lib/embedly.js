var thumbnailProperty = {
    propertyName: 'thumbnailUrl',
    propertySchema: {
        type: String,
        optional: true
    }
}
addToPostSchema.push(thumbnailProperty);

var embedlyKeyProperty = {
    propertyName: 'embedlyId',
    propertySchema: {
        type: String,
        optional: true
    }
}
addToSettingsSchema.push(embedlyKeyProperty);

postModules.push({
    template: 'postThumbnail',
    position: 'center-left'
});
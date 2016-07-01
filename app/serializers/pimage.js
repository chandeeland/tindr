import JSONSerializer from 'ember-data/serializers/json';

export default JSONSerializer.extend({


  normalizeResponse(store, primaryModelClass, payload, id, requestType, isSingle) {

    var res = this.normalize(primaryModelClass, payload) ;
    console.log(res)
    return  res;
  },

   /**
    @method normalize
    @param {DS.Model} modelClass
    @param {Object} resourceHash the resource hash from the adapter
    @return {Object} the normalized resource hash
  */
  normalize(modelClass, resourceHash) {
    if (resourceHash.attributes) {
      this.normalizeUsingDeclaredMapping(modelClass, resourceHash.attributes);
    }

    if (resourceHash.relationships) {
      this.normalizeUsingDeclaredMapping(modelClass, resourceHash.relationships);
    }

    let data = {
      id: 1,
      // this.extractId(modelClass, resourceHash),
      type: 'pimage',
      attributes:    {contentUrl: resourceHash.value[0].contentUrl}
    };

    this.applyTransforms(modelClass, data.attributes);

    return {
      data: [data],
      relationships: []
    };
  },

  extractId(modelClass, resourceHash) {
    return resourceHash['value'][0]['imageId'];
  },

  extractType(modelClass, resourceHash) {
    var attributeKey;
    var attributes = {};

    modelClass.eachAttribute((key) => {
      attributeKey = this.keyForAttribute(key, 'deserialize');
      if (resourceHash['values'][0].hasOwnProperty(attributeKey)) {
        attributes[key] = resourceHash[attributeKey];
      }
    });

    return attributes;
  }

  /**
    @method serialize
    @param {DS.Snapshot} snapshot
    @param {Object} options
    @return {Object} json
  serialize(snapshot, options) {
    let data = this._super(...arguments);
    data.type = this.payloadKeyFromModelName(snapshot.modelName);
    return { data };
  },

  */


});

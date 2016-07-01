import Transform from 'ember-data/transform';

// export default Transform.extend({
//   deserialize(serialized) {
//     return serialized;
//   },

//   serialize(deserialized) {
//     return deserialized;
//   }
// });

DS.ArrayTransform = DS.Transform.extend({
  deserialize: function(serialized) {
    debugger
    return (Ember.typeOf(serialized) == "array")
        ? serialized
        : [];
  },

  serialize: function(deserialized) {
    var type = Ember.typeOf(deserialized);
    debugger
    if (type == 'array') {
        return deserialized
    } else if (type == 'string') {
        return deserialized.split(',').map(function(item) {
            return jQuery.trim(item);
        });
    } else {
        return [];
    }
  }
});

App.register("transform:array", DS.ArrayTransform);
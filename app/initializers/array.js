export function initialize(application) {
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

application.register("transform:array", DS.ArrayTransform);
}

export default {
  name: 'array',
  initialize: initialize
};

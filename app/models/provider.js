import Model from 'ember-data/model';
// import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default DS.Model.extend({
 city: DS.attr('string'),
 presentationName: DS.attr('string'),
 specialty: DS.attr('string'),
 zipCode: DS.attr('string'),
 image: DS.attr('string')

});
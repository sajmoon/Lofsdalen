Ext.define('Lofsdalen.model.Venue', {
  extend: 'Ext.data.Model',
  requires: ['Ext.data.identifier.Uuid'],

  config: {
    idProperty: 'id',
    identifier: 'uuid',
    fields: [
      { name: 'id', type: 'auto', image: "" },
      { name: 'name', type: 'auto' },
      { name: 'shortDesc', type: 'auto'}
    ]
  }
});
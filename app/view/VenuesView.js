Ext.define('Lofsdalen.view.VenuesView', {
	extend: 'Ext.form.Panel',
	xtype: 'venuesview',

	requires: [
		'Ext.TitleBar',
		'Ext.dataview.NestedList'
	],

	config: {
		title: "Venues",
		items: [
			{
				xtype: 'nestedlist',
				title: 'Venues',
				items: [{
					
				}]
			}
		]
	}
})
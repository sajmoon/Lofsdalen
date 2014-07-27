Ext.define('Cóntact', {
	extend: 'Ext.data.Model',

	config: {
		fields: ['id', 'name', 'email', 'message'],

		proxy: {
			type: 'parse',
		}
	}
})
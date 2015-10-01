Ext.define('AM.view.order.ListClientsBox', {
    extend: 'Ext.form.ComboBox',
    alias: 'widget.listClientsBox'
    ,tpl: Ext.create('Ext.XTemplate',
       '<tpl for=".">',
       '<div class="x-boundlist-item">{first_name} {surname}</div>',
       '</tpl>'
    )
    ,displayTpl: Ext.create('Ext.XTemplate',
       '<tpl for=".">',
       '{first_name} {surname}',
       '</tpl>'
    )
    ,fieldLabel: 'Client',
    triggerAction:'all',
    valueField: 'id',
    name: 'klientId',
    id: 'klientId',
    store: 'AM.store.Klienci',
    blankText:'This field is required'
}
);
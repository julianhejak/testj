//   var cellEditing = Ext.create('Ext.grid.plugin.CellEditing', {
//        clicksToEdit: 1
//    });
//   

Ext.define('AM.view.order.List' ,{
	requires:[
	          'Ext.grid.column.Template'
	      ], 
	extend: 'Ext.grid.Panel',
    alias : 'widget.orderlist',
    id : 'orderlist',
    title : 'Orders Clients',
    store : 'AM.store.Orders',
    //plugins: [cellEditing],
	listeners: {
	    viewready: function(view) {
	            
	        var allRecords = Ext.getStore('AM.store.Orders').data;
	        
	        allRecords.each(function (record) {
	            Ext.create('Ext.form.ComboBox', {
				    renderTo: 'list_combo'+record.data.id,
			        store: Ext.create('AM.store.Currency'),
			    	queryMode: 'local',
			    	displayField: 'currency',
			    	valueField: 'cours',
			    	width:60,
			    	defaultValue: 'PL',
			        listeners: {
			            //This event will fire when combobox rendered completely
			            afterrender: function() {
			               //So now we are going to set the combobox value here.
			               //I just simply used my default value in the combobox definition but it's possible to query from combobox store also.
			               //For example: store.getAt('0').get('id'); according to Brik's answer.
			               this.setValue(this.defaultValue);    
			            }
			        }
			    });
	        });
	     }
	},
    columns : [{
        text : "id",
        dataIndex : 'id',
        hidden : false,
        width : 35
    },
    {
        text : "Name order",
        flex : 1,
        dataIndex : 'nazwa',
        field: {
            xtype: 'textfield'
        }
    },
    {
        text : "Price",
        dataIndex : 'price',
        field: {
            xtype: 'textfield'
        }
    },
    {
    	header: 'Test edit combo',
    	
        renderer: function(val,meta,rec) {
        	
           var id = Ext.id();
           
           Ext.defer(function() {
              Ext.widget('button', {
                 renderTo: id,
                 text: 'DELETE',
                 scale: 'small',
                 handler: function() {
                    Ext.Msg.alert("Hello World")
                 }
              });
           }, 50);
           
           return Ext.String.format('<div id="{0}"></div>', id);
        }
     },
    {
    	text: 'Waluta',
    	xtype: 'templatecolumn',
    	tpl: '<div id="list_combo{id}"></div>',
    	weight:200
      },
    {
        xtype:'actioncolumn',
        width:50,
        header: 'Action',
        items: [{
            icon: 'icons/user_edit.png',
            tooltip: 'Edit',
            handler: function(view, rowIndex, colIndex, item, e, record, row) {
                		this.fireEvent('btnEditClick', view, rowIndex, colIndex, item, e, record, row, 'Edit');
            		 }
	        },{
	            icon: 'icons/delete.gif',
	            tooltip: 'Delete',
	            handler: function(view, rowIndex, colIndex, item, e, record, row) {
	                this.fireEvent('btnDeleteClick', view, rowIndex, colIndex, item, e, record, row, 'delete');
	            }
	        }]
       }
    ],
    dockedItems : [{
        xtype : 'toolbar',
        layout : 
        {
            pack : 'left'
        },
        defaults : 
        {
            minWidth : 120
        },
        items : [
        {
            text : 'Create order',	
            itemId : 'btnCreateOrder',
            icon: 'icons/add.gif'
        }
        ]
    }]
});

Ext.define('AM.view.klient.List' ,{
	extend: 'Ext.grid.Panel',
    alias : 'widget.klientlist',
    id : 'klientlist',
    config : {},
    height : 400,
    title : 'All Clients',
    simpleSelect : true,
    store : 'AM.store.Klienci',
//    plugins : [Ext.create('Ext.grid.plugin.RowEditing', 
//    {
//        clicksToEdit : 2
//    })],
    columns : [{
        text : "id",
        dataIndex : 'id',
        hidden : false,
        width : 35
    },
//    {
//        text : "Name klient",
//        dataIndex : 'first_name',
//        width : 150,
//        flex : 1
//        ,xtype:'templatecolumn', tpl:'{first_name} {surname}',
//    },
    {
        text : "Name klient",
        dataIndex : 'full_name',
        width : 150,
        flex : 1
    },
    {
        text : "Post code",
        dataIndex : 'post_code',
        width : 100,
        handler: function() {
        	alert("aaa");
        }
    },
    {
    	xtype:'datecolumn',
        text: 'Create accout',
        width: 100,
        dataIndex: 'createAccoutDate',
        format:'Y-m-d'
    },
    {
        xtype: 'booleancolumn',
        text: 'Status',
        trueText: 'Activ',
        falseText: 'Inactiv',
        dataIndex: 'statusAccount'        
    },
    {
        xtype:'actioncolumn',
        width:40,
        align: 'center',
        header: 'Active status',
        items: [{
            icon: 'icons/accept.gif',
            tooltip: 'Active status',
            handler: function(view, rowIndex, colIndex, item, e, record, row) {
                this.fireEvent('btnStatusClick', view, rowIndex, colIndex, item, e, record, row, 'active_status');
            }
        }]
     },
     {
         xtype:'actioncolumn',
         width:40,
         align: 'center',
         header: 'Inactive status',
//         renderer: function (value, metadata, record) {
//             if (record.get('post_code') ==  '41-200') {
//                 this.icon = 'icons/cross.gif';
//             } else {
//                 this.icon = 'icons/cccross.gif';
//             }
//         },
         items: [{
             icon: 'icons/cross.gif',
             tooltip: 'Inactive status',
             handler: function(view, rowIndex, colIndex, item, e, record, row) {
                 this.fireEvent('btnStatusClick', view, rowIndex, colIndex, item, e, record, row, 'inactive_status');
             }
         }]
      },
      {
          width:40,
          align: 'center',
          header: 'Status',
          renderer: function (value, metadata, record) {
        	  if (record.get('statusAccount') ==  true) {
            	  return '<img src="icons/accept.gif">';
              } else {
                  return '<img src="icons/cross.gif">';
              }
          }
     },
     {
        xtype:'actioncolumn',
        width:50,
        align: 'center',
        header: 'Action',
        items: [{
            icon: 'icons/delete.gif',
            tooltip: 'Delete',
            handler: function(view, rowIndex, colIndex, item, e, record, row) {
                this.fireEvent('itemClick', view, rowIndex, colIndex, item, e, record, row, 'delete');
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
            text : 'Load Data',
            itemId : 'btnLoad'
        },  
        {
            text : 'Delete',	
            itemId : 'btnDelete'
        },
        {
            text : 'Create POP UP',	
            itemId : 'btnCreatePopUp',
            icon: 'icons/add.gif',
        }
        ,{
            text : 'Edit POP UP',	
            itemId : 'btnEditPopUp',
            icon: 'icons/user_edit.png'
        }
        ]
    }]
});



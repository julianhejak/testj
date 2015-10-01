Ext.define('AM.controller.Klient', {
	requires:[
	          'Ext.window.MessageBox'
	      ],      
    extend: 'Ext.app.Controller',
    stores: ['AM.store.Klienci'],
    models: ['AM.model.Klient'],
    views: [
        'AM.view.klient.List',
        'AM.view.klient.Edit'
    ],
    refs: [{
        ref: 'klientlist',
        selector: 'viewport klientlist'
    }],
	init: function() {
        this.control({
        	
        	'klientedit button[action=save]': {
              click: this.createOrUpdateKlient
            },
        	'actioncolumn': {
                itemClick: this.onActionColumnItemClick,
                btnStatusClick: this.btnStatus
                
            },
            'viewport klientlist button[itemId=btnLoad]':
            {
                click: this.onLoadClick
            },
            'viewport klientlist button[itemId=btnDelete]':
            {
                click: this.onDeleteClick
            },
            'viewport klientlist button[itemId=btnCreatePopUp]':
            {
                click: this.btnCreatePopUp
            }
            ,'viewport klientlist button[itemId=btnEditPopUp]':
            {
                click: this.btnEditPopUp
            }
            
        });
    },
    onActionColumnItemClick : function(view, rowIndex, colIndex, item, e, record) {
    	
      var klientStore = Ext.getStore('AM.store.Klienci');
      Ext.MessageBox.confirm('Confirm', 'Are you sure you want to delete client?',

         function (btn,text,id){
		   if (btn == 'yes'){
		      //klientStore.removeAt(rowIndex);
			   klientStore.remove(record);
			   klientStore.sync();
		   }
		 }
        
        );
    },
    btnEditPopUp: function(button) {
    	   //debugger;
      var klientGrid = this.getKlientlist(),
            selectedRows = klientGrid.getSelectionModel().getSelection(),
            record = selectedRows.length > 0 ? selectedRows[0] : null;
        
      if (record){
           var viewForm = Ext.widget('klientedit');
           
           button = viewForm.down('button[action=save]');
           viewForm.down('form').loadRecord(record);
           button.setText('Update');
           
      } else {
           Ext.Msg.alert('Status', 'Please select at least one record to edit!'); 
      }
    },
    btnCreatePopUp: function() {
        
      var view = Ext.widget('klientedit');
      
    },
    createOrUpdateKlient: function(button) {
    	
      var win  = button.up('window'),
	      form   = win.down('form'),
	      values = form.getValues(),
          store = Ext.getStore('AM.store.Klienci'),
          record = form.getRecord();
      if (form.getForm().isValid()) {
    	  
	      switch (button.getText()){
		      case 'Save':
		    	  store.create(values);
		          break;
		      case 'Update':
		          record.set(values);
		          store.update();
		          button.setText('Save');
		  }
      
		  win.close();
		  store.load();
      }
    },
    onLoadClick: function () {
    	
      var klientStore = Ext.getStore('AM.store.Klienci');
      klientStore.load();
      
    },
    onDeleteClick: function () {
    	
      var klientGrid = this.getKlientlist();
      var klientStore = klientGrid.getStore();
      var selectedRows = klientGrid.getSelectionModel().getSelection();

      if (selectedRows.length){
    	   klientStore.remove(selectedRows);
           klientStore.sync();
           
      } else
           Ext.Msg.alert('Status', 'Please select at least one record to delete!'); 
    },
    btnStatus: function(view, rowIndex, colIndex, item, e, record, action, nameAction){
    	
    	
    	if (nameAction == "active_status"){
    	   record.set("statusAccount","true");
    	} else {
    		record.set("statusAccount","false");
    	} 
    	var store = Ext.getStore('AM.store.Klienci');
    	store.update();
    	store.load();
    }
	
});
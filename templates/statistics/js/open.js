$(function(){
	//表格初始化
	var $saleTale=$('#saleTale');
	$saleTale.bootstrapTable({
		method:'post',
		contentType:'application/json',
		idField:'id',
		pagination:'true',
		pageNumber:1,
		striped: true,
		pageSize:20,
		pageList:'[20]',
		height: $('.tableArea').height()-105,
		classes: 'table saleTable table-hover',
		columns:[{
  			field: 'id',
  			title: '序号',
  			align: 'center',
  			valign:'middle',
  			width: '5%',
  			formatter:function(value, row, index){
  				return index + 1;
  			}
    	},{
    		field: 'code',
    		title: '时间',
    		align:'center',
    		valign:'middle'
    	},{
    		field: 'address',
    		title: '开户个数',
    		align:'right',
    		valign:'middle'
    	}],
	    data:[{
    		code:'612105454555',
    		address:'第一小学',
    		operate:'已开户'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学',
    		operate:'已开户'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学',
    		operate:'已开户'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学',
    		operate:'已开户'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	},{
    		code:'612105454555',
    		address:'第一小学'
    	}]
	});
	//时间选择
	lay('.date').each(function(){
		laydate.render({
	    	elem: this,
	    	type: 'date',
	    	trigger: 'click'
	  	});
	}); 
	//表格自适应高度
	$(window).resize(function(){
		$saleTale.bootstrapTable('resetView',{
			height: $('.tableArea').height()-105
		});
	});
	$('#searchCondition').focus();
	//搜索按钮
	$('#searchBtn').on('click',function(){
		$('#saleTale').bootstrapTable('refresh');
	});
	//重置按钮
	$('#resetBtn').on('click',function(){
		$('.tabbar input').val('');
		$('#saleTale').bootstrapTable('refresh');
	});
	//选项卡切换
	$('.tabTitle .inb').on('click',function(){
		var thisName=$(this).attr('name');
		console.log(thisName);
		$(this).addClass('tabActive').siblings().removeClass('tabActive');
		$('.tabDiv .divShow[name='+thisName+']').show().siblings().hide();
	})
});
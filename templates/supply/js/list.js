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
		height: $('.tableArea').height()-65,
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
    		field: 'address',
    		title: '用水户名称',
    		valign:'middle'
    	},{
    		field: 'code',
    		title: '用水户名称证件号',
    		valign:'middle'
    	},{
    		field: 'address',
    		title: '表地址',
    		valign:'middle'
    	},{
    		field: 'address',
    		title: '卡号',
    		align: 'center',
    		valign:'middle'
    	},{
    		field: 'address',
    		title: '操作',
    		valign:'middle',
    		align: 'center',
    		formatter:function(value, row, index){
				var str='<a href="javascript:void(0)" title="补卡" onclick="supply();"><i class="glyphicon glyphicon-credit-card"></i> 补卡</a>';
				return str;
  			}
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
	//表格自适应高度
	$(window).resize(function(){
		$saleTale.bootstrapTable('resetView',{
			height: $('.tableArea').height()-65
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
});
//补卡
function supply() {
    layer.open({
        move: false,
        type: 2,
        title: '补卡',
        area: ['900px', '620px'],
        content: 'add.html',
        btn: ['补卡','关闭'],
        btnAlign: 'c',
        yes: function (index, layero) {
            layer.close(index);
        }, cancel: function (index) {
            layer.close(index);
        }
    });
}
//查看
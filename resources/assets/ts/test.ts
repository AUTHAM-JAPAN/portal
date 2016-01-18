/// <reference path="./typings/jquery/jquery.d.ts" />

class Test {
	constructor(
		private firstName:string = 'hoge',
		private lastName:string = 'fuga'
	){};

	public alertFullName():void {
		alert(this.firstName + ' ' + this.lastName);
		var data:string =  $('#id').val();
		var data2:string = $('#id2').val();
	};
}

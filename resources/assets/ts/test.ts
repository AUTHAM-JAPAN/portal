class Test {
	constructor(
		private firstName:string = 'hoge',
		private lastName:string = 'fuga'
	){};

	public alertFullName():void {
		alert(this.firstName + ' ' + this.lastName);
	};
}

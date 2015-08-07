function Widgets(wsizes) {
	function cEntry (num, entry, opt)	{
		opt = opt || {class:{}, elem:{}};
		opt.class = opt.class || {};
		opt.elem = opt.elem || {};
		opt.class.div = opt.class.div || 'row outer-card';
		opt.class.title = opt.class.title || 'text-center';
		opt.class.p = opt.class.p || 'well text-center inside-card';
		opt.elem.title = opt.elem.title || 'h4' 

		return  '<li>' +
					'<div class="' + opt.class.div +'">' +
						'<br>' +
						'<' + opt.elem.title + ' class="' + opt.class.title + '">.' + num + '.</' + opt.elem.title + '>' +
						'<hr>' +
						'<p class="' + opt.class.p + '">' +
						entry +
						'</p>' +
					'</div>' +
				'</li>';
	}

		wsizes = wsizes || [2,4];
	var widgets = [];
	// this.__defineGetter__('wsizes',function() wsizes);
	this.wsizes = wsizes;
	this.widgets = function(){
		return widgets;
	}

	this.process = function(arr) {
		arr.forEach(function(val, valI){
			widgets.push([cEntry( valI + 1, val ), wsizes[0], wsizes[1]]);
		});
	}
}
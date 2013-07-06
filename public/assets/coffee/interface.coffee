class interface
	constructor: (@elm) ->
		$(@elm).sidr()
		@mouseTracking()
		$("abbr.timeago").timeago()

	action : (act , target)->
		$.sidr(act,target)

	openMenu : () ->
		@action 'open', @elm 

	closeMenu : () ->
		@action "close", @elm

	mouseTracking : () =>
		$(document).mousemove (e)=>
			if e.pageX <= 150 
				$(this).trigger({type:"openMenu"})
			else
				$(this).trigger({type:'closeMenu'})




interface = new interface("sidr");
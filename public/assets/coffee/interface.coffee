class rederinterface
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
				$(@).trigger({type:"openMenu"})
			else
				$(@).trigger({type:'closeMenu'})

	displayHandler: ()=> 
		$item = $('.itemWrapper')
		$('.articleTitle').on 'click', (e)->
			e.preventDefault()
			$(this).parents('.itemWrapper').find('.content').slideToggle()
		$item.find('a').on 'click' , (e)->
			e.preventDefault()


rederinterface = new rederinterface("sidr");
rederinterface.displayHandler(); 
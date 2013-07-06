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
				$(@).trigger({type:"openMenu"})
			else
				$(@).trigger({type:'closeMenu'})

	displayHandler: ()=>
		console.log "loaded"
		$('.itemWrapper').on 'click', (event)=>
			elm = $(event.target)
			if not elm.hasClass('.itemWrapper')
				open = elm.parents('.itemWrapper').data('isopen')
			else
				open = elm.data('isopen')

			if open is true
				$(@).trigger({type:'closeDisplay', elm: event.target})
			else
				console.log elm.trigger({type:'openDisplay'})

	openDisplay: (elm)=>
		console.log elm +'??'
		$(elm).find('content').show()
		$(elm).data('open', true)
	closeDisplay: ()=>
		$(@).slideUp()
		$(@).data('open', false)


interface = new interface("sidr");
interface.displayHandler();
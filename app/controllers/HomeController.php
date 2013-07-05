<?php

class HomeController extends BaseController {

	/*
	|--------------------------------------------------------------------------
	| Default Home Controller
	|--------------------------------------------------------------------------
	|
	| You may wish to use controllers instead of, or in addition to, Closure
	| based routes. That's great! Here is an example controller method to
	| get you started. To route to this controller, just add the route:
	|
	|	Route::get('/', 'HomeController@showWelcome');
	|
	*/

	public function showWelcome()
	{
		$url = 'http://feeds.gawker.com/gizmodo/full';
		$rss = Feed::loadRss($url);

		$data = $this->addDate($rss);

		// echo "<pre>";
		// print_r($data->item);
		// echo "</pre>";
		// exit;

		return View::make('hello', array('rss' => $rss) );
	}



	private function addDate($feed)
	{	
		// print_r($feed);
		foreach($feed as $item)
		{	

			print_r($item);

			$date = new DateTime($item->timestamp);
			$formattedDate = $date->format('Y-m-d');
			echo $formattedDate;
			exit;
			$item['date'] = $formattedDate;
		}

		return $feed;
	}

}
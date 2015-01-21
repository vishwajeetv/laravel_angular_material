<?php

class SampleController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		//
	}

	public function postShow()
	{
		return $this->response("success","retrieved",
			array(

				[	'name'=>'Vishwajeet','state'=>'4.2'],
				[	'name'=>'Aniket','state'=>'MH']

			)
			);
	}

}

<?php

class CountryController extends \BaseController {

	/**
	 * Display a listing of the resource.
	 *
	 * @return Response
	 */
	public function index()
	{
		//
	}

	public function postAddCountry()
	{
		$country = new Country;
		$country->name = Input::get('country_name');
		$country->save();

		$countries = Country::all();

		return $this->response("success","successfuly retrieved country list", $countries);
	}

	public function postShow()
	{
		$countries = Country::all();

		return $this->response("success","successfuly retrieved country list", $countries);
	}
}

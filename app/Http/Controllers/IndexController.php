<?php
namespace App\Http\Controllers;

use App\Http\Controllers\Controller;

class IndexController extends Controller {

	/**
	 * @param none
	 *
	 * @return Response
	 */
	public function index()
	{
		return view('index', ['test' => 'test string....']);
	}

}

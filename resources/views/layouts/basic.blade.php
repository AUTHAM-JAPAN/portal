<!doctype html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="robots" content="index, follow">
	<title>AUTHAM PORTAL</title>

    <!-- Favicon -->
    <link href="/assets/images/favicon.png" rel="icon" type="image/png">

	<link href="/assets/css/bootstrap/bootstrap.css" type="text/css" rel="stylesheet">
	<link href="/assets/css/font-awesome/font-awesome.css" type="text/css" rel="stylesheet">
	<link href="/assets/css/global-style.css" type="text/css" rel="stylesheet">
	<link href="/assets/css/app.css" type="text/css" rel="stylesheet">

    <!-- Required JS -->
    <script src="/assets/js/jquery/jquery.js"></script>
    <script src="/assets/js/jquery/jquery-ui.min.js"></script>

</head>
<body>

	<!-- MOBILE MENU - Option 2 -->
	<section id="navMobile" class="aside-menu left">
		<form class="form-horizontal form-search">
			<div class="input-group">
				<input type="search" class="form-control" placeholder="Search...">
				<span class="input-group-btn">
					<button id="btnHideMobileNav" class="btn btn-close" type="button" title="Hide sidebar"><i class="fa fa-times"></i></button>
				</span>
			</div>
		</form>
		<div id="dl-menu" class="dl-menuwrapper">
			<ul class="dl-menu"></ul>
		</div>
	</section> 

	<i class="fa fa-globe"></i>
	@yield('content')
</body>
</html>

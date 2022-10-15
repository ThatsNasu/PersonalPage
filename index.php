<?php
	require_once('backend/Helpers.php');
?>

<!DOCTYPE="html">
<html>
	<head>
		<title>
			<?php
				$url = HELPERS::getUrl();
				if(sizeof($url) > 0) {
					echo 'ThatsNasu - '.$url[sizeof($url)-1];
				} else {
					echo 'ThatsNasu';
					$url[0] = 'Home';
				}
			?>
		</title>
		<?php if(isset($_GET['debug'])) echo '<link rel="stylesheet" href="/style/global.css" media="screen">'; ?>
		<?php if(isset($_GET['debug'])) echo '<link rel="stylesheet" href="/style/theme.css" media="screen">'; ?>
        <link rel="preconnect" href="https://fonts.gstatic.com">
		<link rel="preload" as="style" onload="this.onload=null; this.rel='stylesheet'" href="https://fonts.googleapis.com/css2?family=Comfortaa&display=swap'" crossorigin>
	</head>
	<?php
		if(isset($_GET['debug'])) {
	?>
	<body>
		<header>
			<span>
				ThatsNasu
			</span>
		</header>
		<nav>
			<?php
				require_once('frames/Navigation.php');
			?>
		</nav>
		<div class="content">
			<?php
				if(file_exists('pages/'.$url[0].'.php')) {
					require_once('pages/'.$url[0].'.php');
				} elseif(file_exists('pages/'.$url[0].'.html')) {
					require_once('pages/'.$url[0].'.html');
				} else {
					require_once('pages/404.html');
				}
			?>
		</div>
		<footer>
			<?php
				require_once('frames/Footer.php');
			?>
		</footer>
	</body>
	<?php
		} else {
			echo 'Sorry, nothing to see here so far. Please stay tuned for future updates.';
		}
	?>
</html>
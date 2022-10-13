<?php
	class Helpers {
		public static function getUrl() {
			if(!empty($_GET['url'])) {
				return explode('/', $_GET['url']);
			}
			return array();
		}
	}
?>
<!doctype html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<title>theme-env-sample</title>
	<?php wp_head();?>
</head>
<body>
<header>
</header>
<h1>Hello theme-env-sample</h1>

<Index id="content"></Index>


<?php if(have_posts()): while(have_posts()):the_post();?>
<article <?php post_class();?>>
	<h1><a href="<?php the_permalink();?>"><?php the_title();?></a></h1>
	<?php the_content();?>
</article>

<footer>フッター</footer>
<?php endwhile; endif;?>

<?php wp_footer();?>
</body>
</html>

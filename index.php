<!doctype html>
<html lang="ja">
<head>
	<meta charset="UTF-8">
	<title>theme-env-sample</title>
	<?php wp_head();?>
</head>
<body>
<header>
	<nav role="navigation" id="menu" class="menu">
  <button class="menu-trigger"><span>Menu</span></button>
  <div class="menu-wrapper">
    <ul>
      <li>
        <a href="#">
          <figure class="fa fa-fw fa-home"></figure>
          <span>Home</span>
        </a>
      </li>
      <li>
        <a href="#">
          <figure class="fa fa-fw fa-heart"></figure>
          <span>Favs</span>
        </a>
      </li>
      <li>
        <a href="#">
          <figure class="fa fa-fw fa-folder"></figure>
          <span>Files</span>
        </a>
      </li>
      <li>
        <a href="#">
          <figure class="fa fa-fw fa-tachometer"></figure>
          <span>Stats</span>
        </a>
      </li>
    </ul>
  </div>
</nav>
</header>
<h1>Hello theme-env-sample</h1>


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

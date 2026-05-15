function Header() {
  return (
    <header className="site-header">
      <a
        href="/"
        className="site-header__brand"
        aria-label="Wolfgang Digital home"
      >
        <img src="" alt="Wolfgang Digital Logo" />
        <h1>
          WOLFGANG <span>digital</span>
        </h1>
      </a>

      <nav>
        <ul>
          <li>Services</li>
          <li>Work</li>
          <li>About Us</li>
          <li>Insights</li>
          <li>Careers</li>
        </ul>
      </nav>

      <div>
        <a href="">Contact Us</a>
        <img src="" alt="Person Being Contacted" />
      </div>
    </header>
  );
}

export default Header;

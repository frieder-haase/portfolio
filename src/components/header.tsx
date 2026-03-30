export default function Header() {
  return (
    <header>
      <div className="container mx-auto relative flex min-h-24 items-center px-4">
        <h1 className="absolute left-4">
          Frieder Haase
        </h1>

        <nav className="absolute right-4 flex gap-4">
          <a href="/">Portfolio</a>
          <a href="/ueber-mich">Über mich</a>
        </nav>
      </div>
    </header>
  );
}
import Link from 'next/link'

const Header = () => {
  return (

        <header>
            <div className="bg-sky-300 container mx-auto">
              <div>

              </div>
              <nav>
                <Link href="/">Home</Link>
                <Link href="/account">Account</Link>
                <Link href="/">Info</Link>
              </nav>
            </div>
        </header>
    )
}

export default Header
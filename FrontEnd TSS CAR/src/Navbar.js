import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
      <img src='./images/tce.png' alt="TSS CAR" width={140} height={50}/>
      </Link>
      <ul>
        <CustomLink to="/">Home</CustomLink>
        <CustomLink to="/pricing">Dashboard</CustomLink>
        <CustomLink to="/about">Booking</CustomLink>
        <CustomLink to="/proj">Project Hub</CustomLink>
        <CustomLink to="/sort">Top Ranks</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}
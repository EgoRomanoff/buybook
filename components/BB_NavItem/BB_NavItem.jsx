import Link from "next/link"
import { NavItem } from "react-bootstrap"
import stl from './BB_NavItem.module.scss'

function BB_NavItem({ href, iconClass, text }) {
  const iconClassName = [stl.link__icon, 'bi', iconClass].join(' ')

  return(
    <NavItem as='li'>
      <Link
        href={ href }
        className={ [stl.nav__link, 'nav-link']
                      .join(' ') }
      >
        <span className={ iconClassName } />
        <span>{ text }</span>
      </Link>
    </NavItem>
  )
}
// bi-collection-fill
export default BB_NavItem
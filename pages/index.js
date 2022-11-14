import Image from 'next/image'
import {
  Col,
  Container,
  Form,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  NavbarBrand,
  Row
} from 'react-bootstrap'
import BB_NavItem from '../components/BB_NavItem/BB_NavItem'

import stl from '../styles/Main.module.scss'

import logo from '../public/img/buybook-logo_full_light-theme.svg'
import bookImg1 from '../public/img/book-1.jpg'
import bookImg2 from '../public/img/book-2.jpg'

export default function Home() {
  return (
    <>
      <header className={ stl.header }>
        <Container fluid="lg">
          <Navbar className={ stl.header__navbar }>
            <NavbarBrand href="#home">
              <Image
                  className={ stl.logo__img }
                  src={ logo }
                  alt='BuyBook logo' />
            </NavbarBrand>

            <Form className={ stl.header__search }>
              <InputGroup>
                <FormControl
                    className={ stl.search__input }
                    type='search'
                    placeholder="Найти...">
                </FormControl>
              </InputGroup>
            </Form>

            <Nav
                className={ stl.header__nav }
                as='ul'
                variant='pills'>
              <BB_NavItem
                href='/catalogy'
                iconClass='bi-collection'
                text='Каталог'
              />
              <BB_NavItem
                href='/favorites'
                iconClass='bi-star'
                text='Избранное'
              />
              <BB_NavItem
                href='/cart'
                iconClass='bi-box-seam'
                text='Корзина'
              />
              <BB_NavItem
                href='/profile'
                iconClass='bi-person'
                text='Профиль'
              />
            </Nav>
          </Navbar>
        </Container>
      </header>

      <main className={ [stl.main, 'py-3']
                         .join(' ') }>
        <Container fluid="lg">

          <Row as='section' className={ stl.greeting }>
            <Col className={ stl.greeting__inner }>
              <h1 className={[ stl.greeting__title, 'fs-1']
                              .join(' ')}
              >
                Добро пожаловать<br/>на&nbsp;
                <span className={stl.title_name}>
                  BuyBook
                </span>
              </h1>
              <Image
                  className={ stl.greeting__book_1 }
                  src={ bookImg1 }
                  alt='Book'
                  placeholder='blur' />
              <Image
                  className={ stl.greeting__book_2 }
                  src={ bookImg2 }
                  alt='Book'
                  placeholder='blur' />
            </Col>
          </Row>

        </Container>
      </main>

      <footer className={ stl.footer }>
        <Container fluid="lg">
          <div className={ [stl.footer__inner, 'py-3']
                            .join(' ') }>
            FOOTER
          </div>
        </Container>
      </footer>
    </>
  )
}

import Image from 'next/image'
import {
  Container,
  Form,
  FormControl,
  InputGroup,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Row } from 'react-bootstrap'
import stl from '../styles/Main.module.scss'
import logo from '../public/buybook-logo_full_light-theme.svg'

export default function Home() {
  return (
    <>
      <header className={ stl.header }>
        <Container>
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
                {/* defaultActiveKey="/page1"> */}
              <NavItem as='li'>
                <NavLink href='/page1'>Каталог</NavLink>
              </NavItem>
              <NavItem as='li'>
                <NavLink href='/page2'>Корзина</NavLink>
              </NavItem>
              <NavItem as='li'>
                <NavLink href='/page3'>Личный кабинет</NavLink>
              </NavItem>
            </Nav>
          </Navbar>
        </Container>
      </header>

      <main className={ [ stl.main,
                        'd-flex',
                        'flex-column',
                        'h-100',
                        'align-items-center',
                        'py-4']
                          .join(' ') }>

        <Container>

          <div className='main__inner'>

            <section className={ [ stl.greeting,
                                  'd-flex',
                                  'align-items-center', 'position-relative'] }>
              <h1 className='fs-1
                            fw-normal
                            text-center
                            flex-fill'>
                Welcome to<br></br>
                <span className='text-primary
                                fw-semibold'>
                  BuyBook
                </span>
              </h1>
              <Image
                  className='position-absolute
                            top-25
                            start-0'
                  src='/book-1.jpg'
                  width='128'
                  height='74'
                  alt='Book' />
              <Image
                  className='position-absolute
                            top-50
                            end-0'
                  src='/book-2.jpg'
                  width='160'
                  height='100'
                  alt='Book' />
            </section>

          </div>

        </Container>

      </main>

      <footer className="footer
                         mt-auto
                         bg-dark">
        <Container>
          <div className="footer__inner
                          d-flex
                          flex-column
                          align-items-center
                          justify-content-center
                          py-4
                          text-white">
            FOOTER
          </div>
        </Container>
      </footer>
    </>
  )
}

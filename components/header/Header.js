import React from 'react'
import Button from '../common/button/Button'
import cls from './header.module.scss'
import { Link, Router } from '../../i18n'
import TopNavBar from './TopNavBar'
import { Wrapper } from '../layout'

const navLinkData = [
    { text: 'Главная', href: '/' },
    { text: 'Открытая карта', href: '/' },
    { text: 'О нас', href: '/' },
    { text: 'Мониторинг', href: '/' },
]

function Header() {
    return (
        <>
            <div className={cls.header_container}>
                <Wrapper>
                    <nav>
                        <div className={cls.logo}>
                            <Link href="/">
                                <a>Logo</a>
                            </Link>
                        </div>
                        <div className={cls.actions}>
                            <Button>Вход</Button>
                            <Button
                                primary
                                onClick={() =>
                                    Router.push('/create-application')
                                }
                            >
                                Оставьте заявку
                            </Button>
                        </div>
                    </nav>
                </Wrapper>
            </div>
            <TopNavBar navLinkData={navLinkData} />
        </>
    )
}
export default Header

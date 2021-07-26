import React from 'react'
import cls from './header.module.scss'
import { Link } from '../../i18n'
import { Wrapper } from '../layout'
import LanguageChanger from './LanguageChanger'

function TopNavBar({ navLinkData }) {
    return (
        <div className={cls.topNavContainer}>
            <Wrapper>
                <div className={cls.topNavBar}>
                    <ul className={cls.nav_list}>
                        {navLinkData.map((link, index) => (
                            <li className={cls.nav_list_item} key={index}>
                                <Link href={link.href}>
                                    <a>{link.text}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <LanguageChanger />
                </div>
            </Wrapper>
        </div>
    )
}

export default TopNavBar

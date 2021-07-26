import React from 'react'
import { Wrapper } from '../layout/index'
import cls from './footer.module.scss'
import { Link } from '../../i18n'
import { InstagramIcon, TwitterIcon, YoutubeIcon } from '../../icons/socials'

const socialsData = [
    { icon: <InstagramIcon />, href: 'https://instagram.com' },
    { icon: <TwitterIcon />, href: 'https://telegram.org' },
    { icon: <YoutubeIcon />, href: 'https://youtube.com' },
]

function Footer() {
    return (
        <footer className={cls.footer_container}>
            <Wrapper>
                <div className={cls.inner}>
                    <div className={cls.copyright}>
                        © Yerelektron 2020 - 2021 All rights reserved
                    </div>
                    <div className={cls.logo}>Logo</div>
                    <ul className={cls.socials}>
                        {socialsData.map((link, index) => (
                            <li className={cls.socials_item} key={index}>
                                <Link href={link.href}>
                                    <a target="_blank">{link.icon}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </Wrapper>
        </footer>
    )
}

export default Footer

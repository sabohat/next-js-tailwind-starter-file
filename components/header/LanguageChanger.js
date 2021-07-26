/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React, { useEffect, useState, useRef } from 'react'
import {
    ClickAwayListener,
    Grow,
    Paper,
    Popper,
    MenuItem,
    MenuList,
    makeStyles,
} from '@material-ui/core'
import { i18n } from '../../i18n'
import { Eng, Uzb, Ru } from '../../icons/flags'

const useStyles = makeStyles(() => ({
    btn: {
        background: 'transparent',
        border: '0',
        display: 'flex',
        alignItems: 'center',
        fontWeight: 500,
        fontSize: '16px',
        lineHeight: '19px',
        '& > svg': {
            marginLeft: 6,
        },
    },
    paper: {
        borderRadius: '6px',
        borderTopLeftRadius: '0',
        borderTopRightRadius: '0',
        background: '#2a2a2a',
        fontFamily: "'San-Francisco', sans-serif",
        overflow: 'hidden',

        '& .MuiMenuItem-root': {
            color: '#fff',
            padding: '10px !important',
            minWidth: '70px',
            display: 'flex',
            fontWeight: '500',
            justifyContent: 'space-between',
            fontFamily: "'San-Francisco', sans-serif",
        },
        '& .MuiMenuItem-root > svg': {
            marginLeft: 4,
        },
        '& .MuiList-root': {
            padding: '0',
        },
        '& .MuiListItem-root:hover': {
            background: 'rgba(255,255,255,0.2)',
        },
    },
    popper: {
        zIndex: '999',
        top: '10px !important',
        left: '4px !important',
        '@media (max-width:876px)': {
            top: '10px !important',
            left: '0 !important',
        },
        '@media (max-width:767px)': {
            top: '3px !important',
            left: '4px !important',
        },
    },
}))
const LanguageChanger = () => {
    const [activeLang, setActiveLang] = useState('')
    const classes = useStyles()
    const [open, setOpen] = useState(false)
    const anchorRef = useRef(null)

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen)
    }

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return
        }

        setOpen(false)
    }

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault()
            setOpen(false)
        }
    }

    const prevOpen = useRef(open)
    useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus()
        }

        prevOpen.current = open
    }, [open])
    useEffect(() => {
        if (i18n.language === 'ru') {
            setActiveLang('Ру')
        } else if (i18n.language === 'en') {
            setActiveLang('En')
        } else if (i18n.language === 'uz') {
            setActiveLang("O'z")
        }
    }, [i18n.language])

    return (
        <>
            <button
                type="button"
                className={`${classes.btn}`}
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle}
            >
                {activeLang}
                {activeLang === "O'z" ? (
                    <Uzb />
                ) : activeLang === 'Ру' ? (
                    <Ru />
                ) : (
                    <Eng />
                )}
                <Popper
                    open={open}
                    anchorEl={anchorRef.current}
                    className={classes.popper}
                    role={undefined}
                    transition
                    disablePortal
                >
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{
                                transformOrigin:
                                    placement === 'bottom'
                                        ? 'center top'
                                        : 'center bottom',
                            }}
                        >
                            <Paper className={classes.paper}>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList
                                        autoFocusItem={open}
                                        id="menu-list-grow"
                                        onKeyDown={handleListKeyDown}
                                    >
                                        {i18n.language !== 'ru' ? (
                                            <MenuItem
                                                onClick={(e) => {
                                                    handleClose(e)
                                                    i18n.changeLanguage('ru')
                                                }}
                                                disableRipple
                                            >
                                                Ру <Ru />
                                            </MenuItem>
                                        ) : (
                                            ''
                                        )}
                                        {i18n.language !== 'en' ? (
                                            <MenuItem
                                                onClick={(e) => {
                                                    handleClose(e)
                                                    i18n.changeLanguage('en')
                                                }}
                                                disableRipple
                                            >
                                                En <Eng />
                                            </MenuItem>
                                        ) : (
                                            ''
                                        )}
                                        {i18n.language !== 'uz' ? (
                                            <MenuItem
                                                onClick={(e) => {
                                                    handleClose(e)
                                                    i18n.changeLanguage('uz')
                                                }}
                                                disableRipple
                                            >
                                                O&apos;z <Uzb />
                                            </MenuItem>
                                        ) : (
                                            ''
                                        )}
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </button>
        </>
    )
}

export default LanguageChanger

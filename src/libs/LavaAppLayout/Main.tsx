import React, { PropsWithChildren, useState } from 'react'
import { AppstoreOutlined } from '@ant-design/icons'
import type { MenuProps } from 'antd'
import { ConfigProvider, Image, Layout, Menu, theme } from 'antd'
import { Else, If, Then } from 'react-if'
import { Styles } from './Styles'
import { Color } from '../../utils/Color'
import {
    ChildMenu,
    MappingMenuModule,
    MappingMenuModuleTitle,
    SubChildMenu,
} from '../../composables/MappingMenu'
import styled from 'styled-components'
import LavaIcon from '../LavaIcon/Main'

const { Header, Content, Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem
}
type Props = {
    menu: any
    logo?: string
    baseColor?: string
    sidebarShow?: boolean
    sidebarShowHeaderContent?: React.ReactNode
    moduleCallback: (e: any) => void
    moduleActive: string
    minHeight?: string
}
export function LavaAppLayout(props: PropsWithChildren<Props>) {
    const {
        children,
        menu,
        logo = '/icons/logo-nabati.svg',
        baseColor,
        sidebarShow = true,
        sidebarShowHeaderContent,
        moduleCallback,
        moduleActive,
        minHeight = '100vh',
    } = props

    const [collapsed, setCollapsed] = useState<boolean>(false)
    const {
        token: { colorBgContainer },
    } = theme.useToken()

    const items: MenuProps['items'] = []

    const [storage, setStorage] = useState<string>('conf')
    const changeModule = (e: any) => {
        moduleCallback(e)
        setStorage(e?.key)
    }
    const mappingMenu = MappingMenuModule(menu, storage)
    const menuModule = MappingMenuModuleTitle(menu)

    mappingMenu?.children?.forEach((data: ChildMenu) => {
        if (data?.type === 'title') {
            const title: any = {
                type: 'group',
                label: data?.title,
            }
            items.push(title)
        }

        if (data?.type === 'submodule') {
            const submenuItems = data?.menus?.map((item: SubChildMenu) => {
                return getItem(item?.title, '9')
            })

            const map = getItem(data?.title, data?.index, <AppstoreOutlined />, submenuItems)
            items.push(map)
        }
    })
    return (
        <ConfigProvider
            theme={{
                components: {
                    Menu: {
                        colorText: collapsed ? 'black' : 'white',
                        itemHoverBg: Color.PinkEdot,
                        itemSelectedBg: Color.PinkEdot,
                        itemSelectedColor: 'white',
                        groupTitleColor: 'white',
                    },
                },
            }}
        >
            <Layout style={{ minHeight }}>
                <Sider
                    hidden={!sidebarShow}
                    theme={'light'}
                    style={Styles.Sider(baseColor)}
                    width={268}
                    collapsed={collapsed}
                    onCollapse={() => setCollapsed(!collapsed)}
                >
                    <div className="flex items-center justify-center">
                        {!collapsed && (
                            <div>
                                <Image
                                    preview={false}
                                    width={140}
                                    height={72}
                                    src={logo}
                                    alt="logo"
                                />
                            </div>
                        )}
                        <If condition={!collapsed}>
                            <Then>
                                <button
                                    className="flex h-7 w-7 items-center justify-center rounded bg-white/30"
                                    onClick={() => setCollapsed(!collapsed)}
                                >
                                    <LavaIcon size={12} icon="arrowLeft" color="white" />
                                </button>
                            </Then>
                            <Else>
                                <button
                                    className="mt-8 flex h-7 w-7 items-center justify-center rounded bg-white/30"
                                    onClick={() => setCollapsed(!collapsed)}
                                >
                                    <LavaIcon size={12} icon="arrowRight" color="white" />
                                </button>
                            </Else>
                        </If>
                    </div>
                    <BaseMenu
                        collapsed={collapsed?.toString()}
                        style={{
                            background: 'transparent',
                            border: 'none',
                            color: 'white',
                            marginTop: collapsed ? 40 : 0,
                        }}
                        defaultSelectedKeys={[]}
                        defaultOpenKeys={[]}
                        mode="inline"
                        items={items}
                    />
                </Sider>
                <Layout>
                    <Header style={{ background: colorBgContainer, zIndex: 1000 }}>
                        <div className="flex items-center gap-4">
                            <If condition={!sidebarShow}>
                                <Then>{sidebarShowHeaderContent}</Then>
                                <Else>
                                    <div className="flex items-center gap-4">
                                        {menuModule?.map((dt: any, key: number) => {
                                            return (
                                                <button
                                                    onClick={() => changeModule(dt)}
                                                    key={key}
                                                    className={`border-b-2 text-slate-500 duration-300 ${moduleActive === dt?.key ? 'border-b-[#2BBECB]' : 'border-b-transparent hover:border-b-blue-400'}`}
                                                >
                                                    {dt?.name}
                                                </button>
                                            )
                                        })}
                                    </div>
                                </Else>
                            </If>
                        </div>
                    </Header>
                    <Content>
                        <If condition={!sidebarShow}>
                            <Then>
                                <div className="fixed left-0 top-0 z-0 h-screen w-screen bg-slate-300 " />
                            </Then>
                        </If>
                        <div className="relative z-10 p-4">{children} kita kita</div>
                    </Content>
                </Layout>
            </Layout>
        </ConfigProvider>
    )
}

export default LavaAppLayout

interface BaseMenuProps {
    collapsed: string
}

const BaseMenu = styled(Menu) <BaseMenuProps>`
    .ant-menu-item-group-title {
        margin-left: 12px;
        text-transform: uppercase;
    }
    .ant-menu-item-group {
        display: ${({ collapsed }) => (collapsed?.toString() === 'true' ? 'none' : 'block')};
    }
`

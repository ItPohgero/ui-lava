export interface MappingMenuModuleProps {
    id: number
    index: number
    group: number
    name: string
    key: string
    children?: Menu[]
}

export interface Menu {
    type: string
    title: string
    icon: string
    index: number
    menus?: SubMenu[]
}

export interface SubMenu {
    type: string
    title: string
    screen: string
    index: number
}

export const MappingMenuModule = (
    data: MappingMenuModuleProps[] | any,
    activeKey: string,
): MappingMenuModuleProps => {
    const results = data?.filter(
        (dt: MappingMenuModuleProps) =>
            dt?.key?.toLocaleLowerCase() === activeKey?.toLocaleLowerCase(),
    )
    return results[0]
}

export const MappingMenuModuleTitle = (
    data: MappingMenuModuleProps[] | any,
): MappingMenuModuleProps[] => {
    const results = data?.map((it: MappingMenuModuleProps) => {
        return {
            id: it?.id,
            index: it?.index,
            group: it?.group,
            name: it?.name,
            key: it?.key,
        }
    })
    return results
}

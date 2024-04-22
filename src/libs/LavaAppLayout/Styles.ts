import { Color } from '../../utils/Color'

export const Styles = {
    Sider: (baseColor: string | undefined): object => {
        return {
            overflow: 'auto',
            height: '100vh',
            scrollbarColor: 'white',
            scrollbarWidth: 'none',
            background: baseColor || Color.Base,
            width: '268px !important',
            paddingLeft: '18px',
            paddingRight: '18px',
        }
    },
}

import { TbApps } from 'react-icons/tb'
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa6'
export const iconRegistry = {
    app: <TbApps />,
    arrowLeft: <FaAngleLeft />,
    arrowRight: <FaAngleRight />,
}
export type IconTypes = keyof typeof iconRegistry

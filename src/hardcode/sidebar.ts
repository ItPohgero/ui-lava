const MenuData = [
    {
        id: 1,
        index: 0,
        group: 1,
        name: 'Config',
        key: 'conf',
        children: [
            {
                type: 'title',
                title: 'Configuration',
                icon: '',
                index: 2,
            },
            {
                type: 'submodule',
                title: 'Billing',
                icon: '',
                index: 3,
                menus: [
                    {
                        type: 'menu',
                        title: 'Calculation',
                        screen: 'calculation',
                        index: 0,
                    },
                    {
                        type: 'menu',
                        title: 'Payment',
                        screen: 'conf.billing.payment',
                        index: 1,
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        index: 1,
        group: 2,
        name: 'Master Data Management',
        key: 'mdm',
        children: [
            {
                type: 'submodule',
                title: 'Overview',
                icon: '',
                index: 0,
            },
            {
                type: 'title',
                title: 'Inventory',
                icon: '',
                index: 1,
            },
            {
                type: 'submodule',
                title: 'Product',
                icon: 'fi-rr-shopping-cart-add',
                index: 2,
                menus: [
                    {
                        type: 'menu',
                        title: 'Product',
                        screen: 'mdm.product',
                        index: 0,
                    },
                    {
                        type: 'menu',
                        title: 'Product Variant',
                        screen: 'mdm.product.variant',
                        index: 1,
                    },
                    {
                        type: 'menu',
                        title: 'Product Category',
                        screen: 'mdm.product.category',
                        index: 2,
                    },
                    {
                        type: 'menu',
                        title: 'Product Brand',
                        screen: 'mdm.product.brand',
                        index: 3,
                    },
                ],
            },
            {
                type: 'title',
                title: 'Sales',
                icon: '',
                index: 3,
            },
            {
                type: 'submodule',
                title: 'Pricing',
                icon: 'fi-rr-money',
                index: 4,
                menus: [
                    {
                        type: 'menu',
                        title: 'Pricing Structure',
                        screen: 'mdm.pricing.structure',
                        index: 0,
                    },
                    {
                        type: 'menu',
                        title: 'Retail Pricing',
                        screen: 'mdm.retail.pricing',
                        index: 1,
                    },
                ],
            },
        ],
    },
]

export default MenuData

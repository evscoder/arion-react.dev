const links = {
    index: '/',
    calendar: '/calendar',
    mail: '/mail',
    chat: '/chat',
    contacts: '/contacts',
    todo: '/todo',
    fileManager: '/file-manager',
    timeLine: '/timeline',
    errorPage: '/404',
    uiKitPage: '/iu-kit'
};

const data = {
    header: {
        lang: {
            items: [
                {icon: 'flags/us.svg', text: 'En', route: '#'},
                {icon: 'flags/gb.svg', text: 'Gb', route: '#'},
                {icon: 'flags/ru.svg', text: 'Ru', route: '#'},
                {icon: 'flags/cn.svg', text: 'Cn', route: '#'},
                {icon: 'flags/au.svg', text: 'Au', route: '#'}
            ]
        },
        notifications: {
            typeItem: 'note',
            title: 'Notifications',
            badge: {
                type: 'red',
                text: 5
            },
            bottom: {
                text: 'View all Notifications'
            },
            items: [{
                id: 'dropdown-notifications-1',
                type: 'note',
                route: '#',
                color: 'color-green',
                icon: 'icon-cart',
                title: 'New Order Received',
                time: '25 min ago'
            }, {
                id: 'dropdown-notifications-2',
                type: 'note',
                route: '#',
                color: 'color-orange',
                icon: 'icon-bill',
                title: 'New invoice received',
                time: '5 hours ago'
            }, {
                id: 'dropdown-notifications-3',
                type: 'note',
                route: '#',
                color: 'color-teal',
                icon: 'icon-truck',
                title: 'new batch is shipped',
                time: '10 hours ago'
            }, {
                id: 'dropdown-notifications-4',
                type: 'note',
                route: '#',
                color: 'color-green',
                icon: 'icon-cart',
                title: 'New Order Received',
                time: '25 min ago'
            }, {
                id: 'dropdown-notifications-5',
                type: 'note',
                route: '#',
                color: 'color-orange',
                icon: 'icon-bill',
                title: 'New invoice received',
                time: '5 hours ago'
            }]
        },
        messages: {
            typeItem: 'messages',
            title: 'Messages',
            badge: {
                type: 'red',
                text: 7
            },
            bottom: { text: 'View all Messages' },
            items: [
                {
                    id: 'dropdown-message-1',
                    type: 'message',
                    route: '#',
                    color: 'color-teal',
                    status: 'green',
                    avatar: 'MA',
                    thumb: 'humans/item-4.jpg',
                    title: 'Mark Anderson',
                    time: '25 min ago',
                    text: 'Nemo enim ipsam voluptatem Nemo enim ipsam voluptatem'
                }, {
                    id: 'dropdown-message-2',
                    type: 'message',
                    route: '#',
                    color: 'color-orange-dark',
                    status: 'green',
                    avatar: 'JT',
                    thumb: 'humans/item-1.jpg',
                    title: 'Jennifer Tang',
                    time: '3 hours ago',
                    text: 'Nemo enim ipsam voluptatem Nemo enim ipsam voluptatem'
                }, {
                    id: 'dropdown-message-3',
                    type: 'message',
                    route: '#',
                    color: 'color-orange',
                    status: 'green',
                    avatar: 'SA',
                    thumb: 'humans/item-5.jpg',
                    title: 'Stephen Allen',
                    time: '10 hours ago',
                    text: 'Nemo enim ipsam voluptatem Nemo enim ipsam voluptatem'
                }, {
                    id: 'dropdown-message-4',
                    type: 'message',
                    route: '#',
                    color: 'color-red',
                    status: 'red',
                    avatar: 'WS',
                    thumb: 'humans/item-6.jpg',
                    title: 'Walter Sanders',
                    time: '30 min ago',
                    text: 'Nemo enim ipsam voluptatem Nemo enim ipsam voluptatem'
                }, {
                    id: 'dropdown-message-5',
                    type: 'message',
                    route: '#',
                    color: 'color-blue',
                    status: 'green',
                    avatar: 'SA',
                    thumb: 'humans/item-7.jpg',
                    title: 'Stephen Allen',
                    time: '2h hours ago',
                    text: 'Nemo enim ipsam voluptatem Nemo enim ipsam voluptatem'
                }, {
                    id: 'dropdown-message-6',
                    type: 'message',
                    route: '#',
                    color: 'color-green',
                    status: 'red',
                    avatar: 'JH',
                    thumb: 'humans/item-8.jpg',
                    title: 'John Hendrix',
                    time: '8 hours ago',
                    text: 'Nemo enim ipsam voluptatem Nemo enim ipsam voluptatem'
                }, {
                    id: 'dropdown-message-7',
                    type: 'message',
                    route: '#',
                    color: 'color-orange',
                    status: 'red',
                    avatar: 'RH',
                    thumb: 'humans/item-9.jpg',
                    title: 'Ryan Henderson',
                    time: '5 min ago',
                    text: 'Nemo enim ipsam voluptatem Nemo enim ipsam voluptatem'
                }
            ]
        },
        profile: {
            abbr: 'MA',
            name: 'Mark Anderson',
            icon: 'humans/item-1.jpg',
            dropdown: {
                items: [
                    { route: '#', icon: 'icon-user', text: 'My Profile' },
                    { route: '#', icon: 'icon-chat', text: 'My chat' },
                    { route: '#', icon: 'icon-task', text: 'Tasks' },
                    { route: '#', icon: 'icon-settings', text: 'Settings' },
                    { route: '#', icon: 'icon-logout', text: 'Logout' }
                ]
            }
        }
    },
    sidebar: {
        logoLink: '/',
        logoIcon: 'logotype.svg',
        logoName: 'Arion',
        menu: [
            {
                id: 'mp-dashboard-1',
                icon: 'icon-dashboard',
                text: 'Dashboard',
                href: links.index
            }, {
                id: 'mp-e-commerce-2',
                icon: 'icon-cart',
                text: 'E-Commerce',
                submenu: [
                    {
                        href: '/products',
                        text: 'Products'
                    }, {
                        href: '/product-add',
                        text: 'Add Product'
                    }, {
                        href: '/orders',
                        text: 'Orders'
                    }, {
                        href: '/order-details',
                        text: 'Order Details'
                    }, {
                        href: '/order-invoice',
                        text: 'Order Invoice'
                    },  {
                        href: '/order-status',
                        text: 'Order Status'
                    }, {
                        href: '/order-history',
                        text: 'Order History'
                    }, {
                        href: '/order-history-v2',
                        text: 'Order History V.2'
                    }, {
                        href: '/order-notes',
                        text: 'Order Notes'
                    }, {
                        href: '/order-messages',
                        text: 'Order Messages'
                    }, {
                        href: '/order-messages-v2',
                        text: 'Order Messages V.2'
                    }, {
                        href: '/customers',
                        text: 'Customers'
                    }, {
                        href: '/customer-account',
                        text: 'Account'
                    }, {
                        href: '/customer-account-v2',
                        text: 'Account V.2'
                    }, {
                        href: '/customer-wishlist',
                        text: 'Wish List'
                    }, {
                        href: '/reviews',
                        text: 'Reviews'
                    }
                ]
            }, {
                id: 'mp-calender-3',
                icon: 'icon-calendar',
                text: 'Calendar',
                href: links.calendar
            }, {
                id: 'mp-mail-4',
                icon: 'icon-email',
                text: 'Mail',
                badge: 20,
                href: links.mail
            }, {
                id: 'mp-calender-5',
                icon: 'icon-chat',
                text: 'Chat',
                href: links.chat
            }, {
                id: 'mp-contacts-6',
                icon: 'icon-contacts',
                text: 'Contacts',
                href: links.contacts
            }, {
                id: 'mp-calender-7',
                icon: 'icon-todo',
                text: 'ToDo',
                href: links.todo
            }, {
                id: 'mp-file-manager-8',
                icon: 'icon-folder',
                text: 'File Manager',
                href: links.fileManager
            }, {
                id: 'mp-timeline-9',
                icon: 'icon-clock',
                text: 'Timeline',
                href: links.timeLine
            }, {
                id: 'mp-authentication-10',
                icon: 'icon-password',
                text: 'Authentication',
                submenu: [
                    {
                        href: '/auth-login',
                        text: 'Login'
                    }, {
                        href: '/auth-login-v2',
                        text: 'Login V.2'
                    }, {
                        href: '/auth-login-v3',
                        text: 'Login V.3'
                    }, {
                        href: '/auth-create',
                        text: 'Create Account'
                    }, {
                        href: '/auth-create-v2',
                        text: 'Create Account V.2'
                    }, {
                        href: '/auth-create-v3',
                        text: 'Create Account V.3'
                    }, {
                        href: '/auth-lock',
                        text: 'Lock'
                    }, {
                        href: '/auth-lock-v2',
                        text: 'Lock V.2'
                    }, {
                        href: '/auth-lock-v3',
                        text: 'Lock V.3'
                    }, {
                        href: '/auth-forgot',
                        text: 'Forgot'
                    }, {
                        href: '/auth-forgot-v2',
                        text: 'Forgot V.2'
                    }, {
                        href: '/auth-forgot-v3',
                        text: 'Forgot V.3'
                    }
                ]
            }, {
                id: 'mp-404-11',
                icon: 'icon-help',
                text: '404',
                href: links.errorPage
            }, {
                id: 'mp-authentication-12',
                icon: 'icon-ui-kit',
                text: 'UI Kit',
                href: links.uiKitPage
            }
        ]
    },
    sidebarEvents: {
        title: 'Event type',
        items: [
            {
                color: 'color-red',
                text: 'Important'
            }, {
                color: 'color-teal',
                text: 'Meeting'
            }, {
                color: 'color-green',
                text: 'Event'
            }, {
                color: 'color-orange',
                text: 'Work'
            }, {
                color: 'color-grey-light',
                text: 'Other'
            }
        ]
    }
};
export default data;

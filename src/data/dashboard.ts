const widgetToolsMore = {
    items: [
        {id: 'revenue-action-refresh', icon: 'icon-refresh', text: 'Refresh'},
        {id: 'revenue-action-settings', icon: 'icon-settings', text: 'Settings'},
        {id: 'revenue-action-download', icon: 'icon-download', text: 'Download'},
        {id: 'revenue-action-action', icon: 'icon-action', text: 'Action'}
    ]
};

const tableItemsMore = {
    items: [
        {id: 'table-action-view', icon: 'icon-view', text: 'Details'},
        {id: 'table-action-duplicate', icon: 'icon-duplicate', text: 'Duplicate'},
        {id: 'table-action-archive', icon: 'icon-archive', text: 'Archive'},
        {id: 'table-action-trash', icon: 'icon-trash', text: 'Delete'}
    ]
};

const dashboardData = {
    widgets: [
        {
            id: 'widget-1',
            title: 'Visits',
            subtitle: 'Total visits today',
            route: '#',
            badge: '7%',
            badgeColor: 'green',
            count: '4000',
            tradeIcon: 'icon-trade-up',
            direction: 'up',
            chart: {
                value: 50,
                color: '#22CCE2'
            }
        }, {
            id: 'widget-2',
            title: 'Orders',
            subtitle: 'Total visits today',
            route: '#',
            badge: '3%',
            badgeColor: 'red',
            count: '1000',
            tradeIcon: 'icon-trade-down',
            direction: 'down',
            chart: {
                value: 75,
                color: '#FDBF5E'
            }
        }, {
            id: 'widget-3',
            title: 'Sales',
            subtitle: 'Total visits today',
            route: '#',
            badge: '9%',
            badgeColor: 'green',
            count: '$500',
            tradeIcon: 'icon-trade-up',
            direction: 'up',
            chart: {
                value: 80,
                color: '#FF3D57'
            }
        }
    ],
    revenue: {
        title: 'Revenue',
        tools: {
            week: [
                {text: 'Week' },
                {text: 'Month'},
                {text: 'Quarter'},
                {text: 'Year'},
                {text: 'All Time'},
                {text: 'Custom'}
            ],
            more: {
                ...widgetToolsMore
            }
        },
        widgets: [
            {
                type: 'red',
                title: 'Current week',
                balance: '$180',
                trade: {
                    direction: 'up',
                    icon: 'icon-trade-up'
                },
                badge: {
                    text: '5%',
                    type: 'green'
                }
            },
            {
                type: 'grey',
                title: 'Previous week',
                balance: '$52.30',
                trade: {
                    direction: 'down',
                    icon: 'icon-trade-down'
                },
                badge: {
                    text: '2%',
                    type: 'red'
                }
            }
        ],
        chart: {
            data: [[0, 10, 48, 9, 9, 53, 12], [0, 45, 9, 49, 53, 180, 70]]
        }
    },
    profit: {
        title: 'Profit',
        tools: {
            more: {
                ...widgetToolsMore
            }
        },
        chart: {
            data: [
                {
                    label: 'Current',
                    color: '#FF3D57',
                    value: 200
                }, {
                    label: 'Lost',
                    color: '#FDBF5E',
                    value: 120
                }, {
                    label: 'Target',
                    color: '#22CCE2',
                    value: 180
                }
            ]
        },
        footer: {
            chartLegend: [
                {
                    color: '#FF3D57',
                    title: 'Current',
                    cost: '$500',
                    direction: 'up',
                    progress: '37%'
                }, {
                    color: '#FDBF5E',
                    title: 'Lost',
                    cost: '$450',
                    direction: 'down',
                    progress: '35%'
                }, {
                    color: '#22CCE2',
                    title: 'Target',
                    cost: '$300',
                    direction: 'down',
                    progress: '28%'
                }
            ]
        }
    },
    activity: {
        title: 'Activity',
        tools: {
            week: [
                {text: 'Week' },
                {text: 'Month'},
                {text: 'Quarter'},
                {text: 'Year'},
                {text: 'All Time'},
                {text: 'Custom'}
            ],
            more: {
                ...widgetToolsMore
            }
        },
        chart: {
            xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            data: [
                {
                    name: 'Views',
                    color: '#22CCE2',
                    data: [170, 120, 200, 270, 220, 290, 320]
                }, {
                    name: 'Comment',
                    color: '#FF3D57',
                    data: [120, 90, 100, 240, 120, 200, 250]
                }
            ]
        }
    },
    tasks: {
        title: 'Tasks',
        tools: {
            more: {
                ...widgetToolsMore
            }
        },
        chart: {
            data: [
                {
                    label: 'Complete',
                    color: '#FF3D57',
                    data: 75
                }, {
                    label: 'In Progress',
                    color: '#FDBF5E',
                    data: 25
                }, {
                    label: 'Started',
                    color: '#04AAB3',
                    data: 80
                }
            ]
        },
        progressBars: [
            {
                color: '#FF3D57',
                title: 'Complete',
                width: '75%',
                value: '75%'
            }, {
                color: '#FDBF5E',
                title: 'In Progress',
                width: '25%',
                value: '25%'
            }, {
                color: '#22CCE2',
                title: 'Started',
                width: '80%',
                value: '80%'
            }
        ]
    },
    overview: {
        title: 'Overview',
        tools: {
            switchers: [
                {
                    active: false,
                    value: 'Weekly'
                }, {
                    active: true,
                    value: 'Monthly'
                }
            ],
            more: {
                ...widgetToolsMore
            }
        },
        widgetItems: [
            {
                size: 'sm',
                title: 'Views',
                balance: '9,000',
                trade: {
                    direction: 'up',
                    icon: 'icon-trade-up'
                },
                badge: {
                    text: '5%',
                    type: 'green'
                }
            },
            {
                size: 'sm',
                title: 'Visits',
                balance: '15,000',
                trade: {
                    direction: 'down',
                    icon: 'icon-trade-down'
                },
                badge: {
                    text: '5%',
                    type: 'red'
                }
            },
            {
                size: 'sm',
                title: 'Orders',
                balance: '18,000',
                trade: {
                    direction: 'up',
                    icon: 'icon-trade-up'
                },
                badge: {
                    text: '5%',
                    type: 'green'
                }
            }
        ],
        chart: {
            data1: {
                categories: ['01 Jan', '02 Jan', '03 Jan', '04 Jan', '05 Jan', '06 Jan', '07 Jan'],
                sessions: {
                    label: 'Session Duration',
                    data: [20, 60, 30, 50, 120, 90, 200]
                }
            },
            data2: {
                categories: ['week 1', 'week 2', 'week 3', 'week 4'],
                sessions: {
                    label: 'Session Duration',
                    data: [200, 120, 60, 150]
                }
            }
        }
    },
    statistics: {
        title: 'Statistics',
        tools: {
            more: {
                ...widgetToolsMore
            }
        },
        chart: {
            xAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            data: [
                {
                    name: 'Current',
                    color: '#FF3D57',
                    data: [23000, 62000, 79000, 86000, 90500, 39500, 64000]
                }, {
                    name: 'Target',
                    color: '#22CCE2',
                    data: [42000, 49000, 39000, 100000, 67000, 59000, 45000]
                }
            ]
        }
    },
    credit: {
        title: 'Credit Card',
        tools: {
            more: {
                ...widgetToolsMore
            }
        },
        credit: {
            image: 'credit-card.svg',
            number: '0123456789101112',
            name: 'Mark Anderson',
            date: '12/31'
        },
        cards: [
            {title: 'Card Type', value: 'VISA'},
            {title: 'Card Holder', value: 'Mark Anderson'},
            {title: 'Expire', value: '12/31'},
            {title: 'Card Number', value: '0123 4567 8910 1112'},
            {title: 'Balance', value: '$1,000,000'}
        ]
    },
    creditAdd: {
        title: 'Add New Card',
        tools: {
            more: {
                ...widgetToolsMore
            }
        }
    },
    creditSaved: {
        title: 'Saved Cards',
        tools: {
            more: {
                ...widgetToolsMore
            }
        },
        items: [
            {
                type: 'mastercard',
                image: 'credit-mastercard.svg',
                number: '0123456789102223',
                name: 'John Doe',
                date: '12/28'
            }, {
                type: 'mastercard',
                image: 'credit-mastercard.svg',
                number: '0123456789101112',
                name: 'Mark Anderson',
                date: '12/31'
            }
        ]
    },
    country: {
        title: 'Revenue By Country',
        tools: {
            switchers: [
                {
                    active: false,
                    value: 'Daily'
                }, {
                    active: true,
                    value: 'Weekly'
                }, {
                    active: false,
                    value: 'Monthly'
                }
            ],
            more: {
                ...widgetToolsMore
            }
        },
        widgetItems: [
            {
                size: 'xl',
                title: 'Total Revenue',
                balance: '$210,000'
            }
        ],
        progressBar: [
            {
                color: 'green',
                width: '40%',
                value: '$70,000'
            }, {
                color: 'orange',
                width: '20%',
                value: '$55,000'
            }, {
                color: 'red',
                width: '20%',
                value: '$40,000'
            }, {
                color: 'orange-dark',
                width: '10%',
                value: '$25,000'
            }, {
                color: 'teal',
                width: '10%',
                value: '$20,000'
            }
        ],
        legend: [
            {
                title: 'Russia',
                direction: 'up',
                value: '40%'
            }, {
                title: 'Australia',
                direction: 'down',
                value: '20%'
            }, {
                title: 'China',
                direction: 'up',
                value: '20%'
            }, {
                title: 'France',
                direction: 'down',
                value: '10%'
            }, {
                title: 'USA',
                direction: 'up',
                value: '10%'
            }
        ]
    },
    history: {
        title: 'Transactions History',
        tools: {
            more: {
                ...widgetToolsMore
            }
        },
        data: [
            {
                title: 'MacBook Pro',
                cost: '$2,500',
                time: '12:00 PM'
            }, {
                title: 'IPad Pro 10.5',
                cost: '$1,000',
                time: '04:00 PM'
            }, {
                title: 'iMac Pro',
                cost: '$5,000',
                time: '05:00 PM'
            }, {
                title: 'AirPods',
                cost: '$500',
                time: '02:00 PM'
            }, {
                title: 'iPhone Xs Max',
                cost: '$2,500',
                time: '03:00 PM'
            }, {
                title: 'IPad Pro 10.5',
                cost: '$1,000',
                time: '04:00 PM'
            }, {
                title: 'Apple Watch',
                cost: '$1,500',
                time: '01:00 PM'
            }, {
                title: 'AirPods',
                cost: '$500',
                time: '07:00 PM'
            }, {
                title: 'MacBook Pro',
                cost: '$2,500',
                time: '14:00 PM'
            }
        ]
    },
    transactions: {
        title: 'Transactions',
        tools: {
            more: {
                ...widgetToolsMore
            }
        },
        actions: {
            ...tableItemsMore
        },
        table: {
            id: 'table-transaction',
            head: [
                {
                    id: 1,
                    title: 'Order No.'
                }, {
                    id: 12,
                    title: 'Name'
                }, {
                    id: 13,
                    title: 'Date'
                }, {
                    id: 14,
                    title: 'Amount'
                }, {
                    id: 15,
                    title: 'Address'
                }, {
                    id: 16,
                    title: 'Status'
                }
            ],
            rows: [
                {
                    id: 1,
                    order: '#790841',
                    name: {
                        color: 'orange',
                        avatarTitle: 'WS',
                        avatar: 'humans/item-4.jpg',
                        title: 'Walter Sanders'
                    },
                    date: '12.07.2018',
                    amount: '$700',
                    address: 'Winding Way West, RI 3261, US',
                    status: {
                        color: 'green',
                        value: 'Paid'
                    }
                },
                {
                    id: 11,
                    order: '#781208',
                    name: {
                        color: 'blue',
                        avatarTitle: 'MA',
                        avatar: 'humans/item-6.jpg',
                        title: 'Mark Anderson'
                    },
                    date: '15.07.2018',
                    amount: '$500',
                    address: 'arvis Street Portville, NY 2596, US',
                    status: {
                        color: 'green',
                        value: 'Paid'
                    }
                },
                {
                    id: 111,
                    order: '#987120',
                    name: {
                        color: 'green',
                        avatarTitle: 'PG',
                        avatar: 'humans/item-3.jpg',
                        title: 'Pamela Garza'
                    },
                    date: '17.07.2018',
                    amount: '$800',
                    address: 'Calico Drive Ellensburg, WA 5572, US',
                    status: {
                        color: 'red',
                        value: 'Canceled'
                    }
                },
                {
                    id: 1111,
                    order: '#871023',
                    name: {
                        color: 'red',
                        avatarTitle: 'WS',
                        avatar: 'humans/item-9.jpg',
                        title: 'Walter Sanders'
                    },
                    date: '18.07.2018',
                    amount: '$1,000',
                    address: 'Randall Drive Pahala, HI 7289, US',
                    status: {
                        color: 'green',
                        value: 'Paid'
                    }
                },
                {
                    id: 12,
                    order: '#871023',
                    name: {
                        color: 'orange',
                        avatarTitle: 'RH',
                        avatar: 'humans/item-5.jpg',
                        title: 'Ryan Henderson'
                    },
                    date: '22.07.2018',
                    amount: '$900',
                    address: 'Archwood Newcastle, WY 1139, US',
                    status: {
                        color: 'green',
                        value: 'Paid'
                    }
                },
                {
                    id: 122,
                    order: '#922309',
                    name: {
                        color: 'blue',
                        avatarTitle: 'SA',
                        title: 'Stephen Allen'
                    },
                    date: '25.07.2018',
                    amount: '$3,000',
                    address: 'Park Boulevard Oskaloosa, IA 4814, US',
                    status: {
                        color: 'blue',
                        value: 'Pending'
                    }
                },
                {
                    id: 133,
                    order: '#892107',
                    name: {
                        color: 'red',
                        avatarTitle: 'JT',
                        avatar: 'humans/item-1.jpg',
                        title: 'Jennifer Tang'
                    },
                    date: '27.07.2018',
                    amount: '$1,000',
                    address: 'Harvest Lane Eagleville, MO 9818, US',
                    status: {
                        color: 'green',
                        value: 'Paid'
                    }
                },
                {
                    id: 144,
                    order: '#902370',
                    name: {
                        color: 'green',
                        avatarTitle: 'SH',
                        avatar: 'humans/item-2.jpg',
                        title: 'Sophia Hale'
                    },
                    date: '22.07.2018',
                    amount: '$900',
                    address: 'Archwood Newcastle, WY 1139, US',
                    status: {
                        color: 'blue',
                        value: 'Pending'
                    }
                },
                {
                    id: 123,
                    order: '#781208',
                    name: {
                        color: 'orange',
                        avatarTitle: 'MA',
                        avatar: 'humans/item-6.jpg',
                        title: 'Mark Anderson'
                    },
                    date: '24.07.2018',
                    amount: '$800',
                    address: 'Jarvis Street Portville, NY 2596, US',
                    status: {
                        color: 'green',
                        value: 'Paid'
                    }
                }
            ]
        }
    },
    countrySales: {
        title: 'Sales by country',
        tools: {
            more: {
                ...widgetToolsMore
            }
        },
        countries: [
            {
                id: 'sale-country-Australia',
                flag: 'au',
                name: 'Australia',
                cost: '25,000',
                direction: 'up',
                percentage: '40%'
            }, {
                id: 'sale-country-Russia',
                flag: 'ru',
                name: 'Russia',
                cost: '10,000',
                direction: 'up',
                percentage: '20%'
            }, {
                id: 'sale-country-UnitedStates',
                flag: 'us',
                name: 'United States',
                cost: '5,000',
                direction: 'down',
                percentage: '15%'
            }, {
                id: 'sale-country-China',
                flag: 'cn',
                name: 'China',
                cost: '2,000',
                direction: 'down',
                percentage: '10%'
            }
        ]
    },
    reviews: {
        title: 'Reviews',
        tools: {
            more: {
                ...widgetToolsMore
            }
        },
        items: [
            {
                id: 'review-1',
                image: 'humans/item-1.jpg',
                color: 'color-red',
                caption: 'KG',
                name: 'Kathy Graham',
                time: '3 hours ago',
                rating: 5,
                text: 'Nemo enim ipsam voluptatem, qui in ea voluptate veting esse quam nihil molestiae consequatur, vels illum utasle etcos quam voluptates recusandae.'
            }, {
                id: 'review-2',
                image: 'humans/item-4.jpg',
                color: 'color-orange',
                caption: 'DF',
                name: 'Dale Fisher',
                time: '5 hours ago',
                rating: 4,
                text: 'At vero eos accusamus as iusto odio dignissimos provis ducimus, consectetur adipiscing elit, piscings obcaecati cupiditate nonpiscing provident fuga.'
            }, {
                id: 'review-3',
                image: 'humans/item-5.jpg',
                color: 'color-teal',
                caption: 'BH',
                name: 'Bruce Henderson',
                time: '6 hours ago',
                rating: 3,
                text: 'Et harum quidem rerum facilis esits expedita distinctios, quia voluptas sit, aspernatur aut odit aut fugit, seedrnat dolores consequuntur magni...'
            }, {
                id: 'review-4',
                color: 'color-blue',
                caption: 'SA',
                name: 'Stephen Allen',
                time: '8 hours ago',
                rating: 4,
                text: 'At vero eos accusamus as iusto odio dignissimos provis ducimus, consectetur adipiscing elit, piscings obcaecati cupiditate nonpiscing provident fuga.'
            }
        ]
    },
    calendar: {
        title: 'Calendar',
        tools: {
            more: {
                ...widgetToolsMore
            }
        }
    }
};

export default dashboardData;

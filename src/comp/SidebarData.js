import React from "react";
import * as FaIcons from 'react-icons/Fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'

export const SidebarData = [
    {
        title: 'Blog',
        path: '/blog',
        icon: <AiIcons.AiFillHome />,
        iconClosed: <RiIcons.RiArrowDownSFill />,
        iconOpened: <RiIcons.RiArrowUpSFill />,
        subNav: [
            {
                title: 'Users',
                path: '/blog/users',
                icon: <IoIcons.IoIosPaper />,

            },
            {
                title: '',Revenue,
                path: '/blog/revenue',
                icon: <IoIcons.IoIosPaper />
            },
          ]
        },
        {
            title: 'Projects',
            path: '/projects',
            icon: <AiIcons.AiFillHome />,
            iconClosed: <RiIcons.RiArrowDownSFill />,
            iconOpened: <RiIcons.RiArrowUpSFill />,
            subNav: [
                {
                    title: 'Project',
                    path: '/projects/project1',
                    icon: <IoIcons.IoIosPaper />,
    
                },
                {
                    title: 'Project',
                    path: '/projects/project2',
                    icon: <IoIcons.IoIosPaper />
                },
              ]
            },
    ]
/**
 * Created by huxiubin on 2017/7/26.
 */

import { TabService } from '../../app/services/tab.service';
export let navigateInfo = [
    {
        label: 'File',
        icon: 'fa-file-o',
        items: [{
                label: 'New', 
                icon: 'fa-plus',
                items: [
                    {label: 'Project'},
                    {label: 'Other'},
                ]
            },
            {label: 'Open'},
            {label: 'Quit'}
        ]
    },
    {
        label: 'Edit',
        icon: 'fa-edit',
        items: [
            {label: 'Undo', icon: 'fa-mail-forward'},
            {label: 'Redo', icon: 'fa-mail-reply'}
        ]
    },
    {
        label: 'Help',
        icon: 'fa-question',
        items: [
            {
                label: 'Contents'
            },
            {
                label: 'Search', 
                icon: 'fa-search',
                items: [
                    {
                        label: 'Text', 
                        items: [
                            {
                                label: 'Workspace'
                            }
                        ]
                    },
                    {
                        label: 'File'
                        // command: (event) => {
                        //   console.log(event);
                        // //   // this.tabService.addTabView(event.item.label, 'tab5 content', true)
                        // //   this.addTab(event.item.label, 'tab5 content');
                        // }
                    }
            ]}
        ]
    },
    {
        label: 'Actions',
        icon: 'fa-gear',
        items: [
            {
                label: 'Edit',
                icon: 'fa-refresh',
                items: [
                    {label: 'Save', icon: 'fa-save'},
                    {label: 'Update', icon: 'fa-save'},
                ]
            },
            {
                label: 'Other',
                icon: 'fa-phone',
                items: [
                    {label: 'Delete', icon: 'fa-minus'}
                ]
            }
        ]
    }
];
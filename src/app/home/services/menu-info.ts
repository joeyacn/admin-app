export let menuInfo = [
  {
    label: 'File',
    icon: 'fa-file-o',
    items: [
      {
        label: 'New',
        icon: 'fa-plus',
        items: [
          {label: 'Role', routerLink: 'role'},
          {label: 'userAdmin', routerLink: 'userAdmin'}
        ]
      },
      {label: 'Open'},
      {label: 'Quit'}
    ]
  },
  {
    label: 'level1',
    icon: 'fa-file-o'
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

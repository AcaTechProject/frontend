const SidebarItems = [
  {
    id: 0,
    name: "원생관리",
    route: "/Login",
    subItems: [
      {
        id: "sub0",
        name: "출결관리",
        route: "/Login",
      },
      {
        id: "sub1",
        name: "학생관리",
        route: "/Login",
        subItems: [
          {
            id: "sub1_submenu1",
            name: "수강생",
            route: "/Join",
          },
          {
            id: "sub1_submenu2",
            name: "신규상담",
            route: "/Login",
          },
        ],
      },
    ],
  },
  {
    id: 1,
    name: "일정 관리",
    subItems: [
      {
        id: "sub2",
        name: "전체 일정",
      },
      {
        id: "sub3",
        name: "일정 등록",
      },
    ],
  },
];

export default SidebarItems;

export const navigationTree = [
  {
    id: "home",
    label: "Início",
    path: "/",
  },
  {
    id: "phases",
    label: "Manual de operações",
    children: [
      {
        id: "phase_1",
        label: "Fundamentação da LAN",
        path: "/phases/lan",
      },
      {
        id: "phase_2",
        label: "Cérebro da rede",
        path: "/phases/networking",
      },
      {
        id: "phase_3",
        label: "Gerenciamento de diagnóstico",
        path: "/phases/diagnostic",
      },
    ],
  },
  {
    id: "blueprint",
    label: "Blueprint",
    path: "/blueprint",
  },
];

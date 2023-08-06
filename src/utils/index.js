export function randomNumberBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

export const getTasksByStatus = (array, status) => {
  return array.filter((c) => c.status === status);
};

export const getAvatars = (category) => {
  if (category === "personal") {
    return { more: 0, value: Array(1).fill(0) };
  } else if (category === "teams") {
    const RANDOM = randomNumberBetween(2, 13);
    return {
      more: RANDOM - 4,
      value: Array(RANDOM).fill(0).slice(0, 4),
    };
  }
};

export function getTodos() {
  return [
    {
      id: crypto.randomUUID(),
      title: "Web design",
      description: "Description for my task.",
      status: "starter",
      category: "teams",
      advance: Math.floor(Math.random(0, 1) * 100),
      date: "",
      time: "",
      subTask: [],
    },
    {
      id: crypto.randomUUID(),
      title: "Database Design",
      description: "Description for my task, for database design",
      status: "starter",
      category: "personal",
      advance: Math.floor(Math.random(0, 1) * 100),
      date: "",
      time: "",
      subTask: [],
    },
    {
      id: crypto.randomUUID(),
      title: "Create styles with SCSS",
      description: "This a moment for create React create app from Platzi, and test.",
      status: "starter",
      category: "personal",
      advance: Math.floor(Math.random(0, 1) * 100),
      date: "",
      time: "",
      subTask: [],
    },
  ];
}

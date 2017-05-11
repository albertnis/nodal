const initialState =
    {
        users: [
            {
                name: "Albert Nisbet",
                u_id: 0,
                settings: {}
            }
        ],
        spaces: [
            {
                title: "Personal",
                s_id: 0,
                u_id: 0
            },
            {
                title: "COSC428",
                s_id: 1,
                u_id: 0
            }
        ],
        projects: [
            {
                title: "Nodal",
                p_id: 0,
                s_id: 0
            },
            {
                title: "Transversal",
                p_id: 1,
                s_id: 0
            }
        ],
        tasklists: [
            {
                text: "Basic functionality",
                l_id: 0,
                p_id: 0

            },
            {
                text: "Next features",
                l_id: 1,
                p_id: 0
            },
            {
                text: "\"Stretch goals\"",
                l_id: 2,
                p_id: 0
            }
        ],
        tasks: [
            {
                text: "Implement tasks",
                done: true,
                t_id: 0,
                l_id: 0
            },
            {
                text: "Implement lists of tasks",
                done: true,
                t_id: 1,
                l_id: 0
            },
            {
                text: "Task renaming",
                done: true,
                t_id: 2,
                l_id: 0
            },
            {
                text: "List renaming",
                done: true,
                t_id: 3,
                l_id: 0
            },
            {
                text: "Task deletion/creation",
                done: false,
                t_id: 4,
                l_id: 0
            },
            {
                text: "List deletion/creation",
                done: false,
                t_id: 5,
                l_id: 0
            },
            {
                text: "Task reordering",
                done: false,
                t_id: 6,
                l_id: 0
            },
            {
                text: "Implement persistent state ",
                done: false,
                t_id: 7,
                l_id: 0
            },
            {
                text: "List linking (potentially using bezier.js for frontend)",
                done: false,
                t_id: 8,
                l_id: 0
            },
            {
                text: "Header with navigation state",
                done: false,
                t_id: 9,
                l_id: 1
            },
            {
                text: "Implement projects (of lists of tasks)",
                done: false,
                t_id: 10,
                l_id: 1
            },
            {
                text: "Implement spaces (of projects)",
                done: false,
                t_id: 11,
                l_id: 1
            },
            {
                text: "Implement users (of spaces)",
                done: false,
                t_id: 12,
                l_id: 1
            },
            {
                text: "Task list auto-arrangement",
                done: false,
                t_id: 18,
                l_id: 1
            },
            {
                text: "Deadline management and scheduling",
                done: false,
                t_id: 19,
                l_id: 1
            },
            {
                text: "Fancy animations",
                done: false,
                t_id: 13,
                l_id: 2
            },
            {
                text: "Search",
                done: false,
                t_id: 14,
                l_id: 2
            },
            {
                text: "Deploy on remote node.js server",
                done: false,
                t_id: 15,
                l_id: 2
            },
            {
                text: "Theming",
                done: false,
                t_id: 16,
                l_id: 2
            },
            {
                text: "Sharing of spaces and projects",
                done: false,
                t_id: 17,
                l_id: 2
            },
            {
                text: "Real time collaboration",
                done: false,
                t_id: 20,
                l_id: 2
            }
        ]
    }

export default initialState

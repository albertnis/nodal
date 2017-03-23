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
                text: "Code this",
                l_id: 0

            },
            {
                text: "Code that",
                l_id: 1
            },
            {
                text: "Another",
                l_id: 2
            }
        ],
        tasks: [
            {
                text: "Single task",
                done: true,
                t_id: 0,
                l_id: 0
            },
            {
                text: "Task list",
                done: false,
                t_id: 1,
                l_id: 0
            },
            {
                text: "Redux",
                done: false,
                t_id: 2,
                l_id: 0
            },
            {
                text: "Styles",
                done: false,
                t_id: 3,
                l_id: 0
            },
            {
                text: "Bezier",
                done: false,
                t_id: 4,
                l_id: 1
            },
            {
                text: "Routing",
                done: false,
                t_id: 5,
                l_id: 2
            },
            {
                text: "Header",
                done: false,
                t_id: 6,
                l_id: 2
            },
            {
                text: "Spaces",
                done: false,
                t_id: 7,
                l_id: 2
            }
        ]
    }

export default initialState

localStorage.clear()

const employees = [
  {
    "id": 1,
    "firstName": "Aarav",
    "email": "e@e.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskId": 1,
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare monthly sales report",
        "taskDescription": "Compile and summarize sales data for July.",
        "taskDate": "2025-08-05",
        "category": "Reporting"
      },
      {
        "taskId": 2,
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Team meeting notes",
        "taskDescription": "Write and share notes from the weekly meeting.",
        "taskDate": "2025-08-06",
        "category": "Documentation"
      },
      {
        "taskId": 3,
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Update client database",
        "taskDescription": "Correct outdated client phone numbers.",
        "taskDate": "2025-08-08",
        "category": "Database"
      }
    ]
  },
  {
    "id": 2,
    "firstName": "Isha",
    "email": "employee2@example.com",
    "password": "123",
    "taskCounts": {
      "active": 1,
      "newTask": 1,
      "completed": 1,
      "failed": 1
    },
    "tasks": [
      {
        "taskId": 1,
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Inventory check",
        "taskDescription": "Verify stock levels for raw materials.",
        "taskDate": "2025-08-04",
        "category": "Logistics"
      },
      {
        "taskId": 2,
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Follow up with supplier",
        "taskDescription": "Contact supplier regarding late delivery.",
        "taskDate": "2025-08-07",
        "category": "Communication"
      },
      {
        "taskId": 3,
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Schedule maintenance",
        "taskDescription": "Arrange machine maintenance with service team.",
        "taskDate": "2025-08-09",
        "category": "Maintenance"
      },
      {
        "taskId": 4,
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Prepare invoice batch",
        "taskDescription": "Generate invoices for last week’s orders.",
        "taskDate": "2025-08-10",
        "category": "Finance"
      }
    ]
  },
  {
    "id": 3,
    "firstName": "Rohan",
    "email": "employee3@example.com",
    "password": "123",
    "taskCounts": {
      "active": 4,
      "newTask": 1,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "taskId": 1,
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Update project board",
        "taskDescription": "Move completed tasks in project management tool.",
        "taskDate": "2025-08-03",
        "category": "Project Management"
      },
      {
        "taskId": 2,
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Customer feedback review",
        "taskDescription": "Summarize top 5 customer complaints.",
        "taskDate": "2025-08-06",
        "category": "Customer Service"
      },
      {
        "taskId": 3,
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Social media draft",
        "taskDescription": "Create draft posts for next week.",
        "taskDate": "2025-08-08",
        "category": "Marketing"
      },
      {
        "taskId": 4,
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Internal survey setup",
        "taskDescription": "Set up Google Form for employee feedback.",
        "taskDate": "2025-08-09",
        "category": "HR"
      },
      {
        "taskId": 5,
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Data backup",
        "taskDescription": "Backup system files to secure server.",
        "taskDate": "2025-08-11",
        "category": "IT"
      }
    ]
  },
  {
    "id": 4,
    "firstName": "Ananya",
    "email": "employee4@example.com",
    "password": "123",
    "taskCounts": {
      "active": 3,
      "newTask": 1,
      "completed": 1,
      "failed": 0
    },
    "tasks": [
      {
        "taskId": 1,
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare training slides",
        "taskDescription": "Design onboarding slides for new hires.",
        "taskDate": "2025-08-05",
        "category": "Training"
      },
      {
        "taskId": 2,
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Check server logs",
        "taskDescription": "Review system errors from last 24 hours.",
        "taskDate": "2025-08-06",
        "category": "IT"
      },
      {
        "taskId": 3,
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Prepare presentation",
        "taskDescription": "Finalize slides for client meeting.",
        "taskDate": "2025-08-07",
        "category": "Business"
      }
    ]
  },
  {
    "id": 5,
    "firstName": "Kabir",
    "email": "employee5@example.com",
    "password": "123",
    "taskCounts": {
      "active": 2,
      "newTask": 1,
      "completed": 2,
      "failed": 1
    },
    "tasks": [
      {
        "taskId": 1,
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Draft marketing email",
        "taskDescription": "Prepare email campaign draft for approval.",
        "taskDate": "2025-08-04",
        "category": "Marketing"
      },
      {
        "taskId": 2,
        "active": true,
        "newTask": true,
        "completed": false,
        "failed": false,
        "taskTitle": "Bug fix testing",
        "taskDescription": "Verify fixes for reported UI issues.",
        "taskDate": "2025-08-06",
        "category": "QA"
      },
      {
        "taskId": 3,
        "active": true,
        "newTask": false,
        "completed": false,
        "failed": false,
        "taskTitle": "Update documentation",
        "taskDescription": "Revise API documentation with new endpoints.",
        "taskDate": "2025-08-07",
        "category": "Documentation"
      },
      {
        "taskId": 4,
        "active": false,
        "newTask": false,
        "completed": false,
        "failed": true,
        "taskTitle": "Security audit",
        "taskDescription": "Run security audit on staging server.",
        "taskDate": "2025-08-09",
        "category": "Security"
      },
      {
        "taskId": 5,
        "active": false,
        "newTask": false,
        "completed": true,
        "failed": false,
        "taskTitle": "Prepare weekly summary",
        "taskDescription": "Summarize team progress and share update email.",
        "taskDate": "2025-08-10",
        "category": "Reporting"
      }
    ]
  }
]



const admin = [
    {
        "Id": 101,
        "email": "admin@example.com",
        "password": "123"
    }
]


export const setLocalstorage = () => {
    localStorage.setItem('employees', JSON.stringify(employees))
    localStorage.setItem('admin', JSON.stringify(admin))
}
export const getLocalstorage = () => {
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return{employees,admin}
}
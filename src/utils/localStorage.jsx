const employees = [
    {
      "id": "E001",
      "email": "employee1@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "task_title": "Complete Report",
          "task_description": "Finish the quarterly report for management.",
          "task_date": "2025-01-12",
          "category": "Work"
        },
        {
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "task_title": "Email Newsletter",
          "task_description": "Send out the monthly newsletter to all subscribers.",
          "task_date": "2025-01-05",
          "category": "Communication"
        },
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "task_title": "Team Meeting",
          "task_description": "Participate in the team meeting to discuss project status.",
          "task_date": "2025-01-15",
          "category": "Meetings"
        }
      ]
    },
    {
      "id": "E002",
      "email": "employee2@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "task_title": "Client Call",
          "task_description": "Follow up with client on project requirements.",
          "task_date": "2025-01-10",
          "category": "Client"
        },
        {
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "task_title": "Data Analysis",
          "task_description": "Analyze customer data for trends and patterns.",
          "task_date": "2025-01-07",
          "category": "Analysis"
        }
      ]
    },
    {
      "id": "E003",
      "email": "employee3@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "task_title": "Update Website",
          "task_description": "Make updates to the company website for the new year.",
          "task_date": "2025-01-14",
          "category": "Web Development"
        },
        {
          "active": true,
          "new_task": false,
          "completed": true,
          "failed": false,
          "task_title": "Fix Bugs",
          "task_description": "Resolve bugs reported by users on the platform.",
          "task_date": "2025-01-03",
          "category": "Maintenance"
        },
        {
          "active": false,
          "new_task": false,
          "completed": false,
          "failed": true,
          "task_title": "Social Media Strategy",
          "task_description": "Develop a social media strategy for the next quarter.",
          "task_date": "2025-01-01",
          "category": "Marketing"
        }
      ]
    },
    {
      "id": "E004",
      "email": "employee4@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "task_title": "Product Review",
          "task_description": "Write a product review based on user feedback.",
          "task_date": "2025-01-13",
          "category": "Product"
        },
        {
          "active": true,
          "new_task": false,
          "completed": false,
          "failed": true,
          "task_title": "Inventory Update",
          "task_description": "Update the inventory with the latest stock.",
          "task_date": "2025-01-02",
          "category": "Operations"
        }
      ]
    },
    {
      "id": "E005",
      "email": "employee5@example.com",
      "password": "123",
      "tasks": [
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "task_title": "Employee Training",
          "task_description": "Conduct training sessions for new employees.",
          "task_date": "2025-01-20",
          "category": "HR"
        },
        {
          "active": false,
          "new_task": false,
          "completed": true,
          "failed": false,
          "task_title": "Client Meeting",
          "task_description": "Attend a meeting with a potential client.",
          "task_date": "2025-01-08",
          "category": "Client"
        },
        {
          "active": true,
          "new_task": true,
          "completed": false,
          "failed": false,
          "task_title": "Budget Review",
          "task_description": "Review the department budget for the upcoming quarter.",
          "task_date": "2025-01-18",
          "category": "Finance"
        }
      ]
    }
  ];

//    we will create two functions to get and set data

const admin = [{
  "id": 1,
  "email": "admin@example.com",
  "password": "123"
}];

export const setLocalStorage = ()=>{
  localStorage.setItem('employees',JSON.stringify(employees))
  localStorage.setItem('admin',JSON.stringify(admin))
}
export const getLocalStorage = ()=>{
  const employees = JSON.parse(localStorage.getItem('employees'))
  const admin = JSON.parse(localStorage.getItem('admin'))

  return {employees,admin}
}
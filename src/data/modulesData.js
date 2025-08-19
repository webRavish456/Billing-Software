const modulesData = [
  {
    id: 1,
    moduleName: "Dashboard",
    submodule: "Main Dashboard",
    tableView: "Dashboard Overview",
    createPage: "N/A",
    viewPage: "/dashboard",
    editPage: "N/A",
    workStatus: "Completed",
    reference: "Internal"
  },
  {
    id: 2,
    moduleName: "Branch",
    submodule: "Branch Management",
    tableView: "Branch List",
    createPage: "/branch/create",
    viewPage: "/branch/list",
    editPage: "/branch/edit",
    workStatus: "In Progress",
    reference: "Zoho CRM"
  },
  {
    id: 3,
    moduleName: "Department",
    submodule: "Department Management",
    tableView: "Department List",
    createPage: "/department/create",
    viewPage: "/department/list",
    editPage: "/department/edit",
    workStatus: "Completed",
    reference: "Internal"
  },
  {
    id: 4,
    moduleName: "Doctor",
    submodule: "All Doctor",
    tableView: "Doctor List",
    createPage: "/doctor/create",
    viewPage: "/doctor/all-doctor",
    editPage: "/doctor/edit",
    workStatus: "Completed",
    reference: "Hospital Management"
  },
  {
    id: 5,
    moduleName: "Doctor",
    submodule: "Shift Management",
    tableView: "Shift Schedule",
    createPage: "/doctor/shift/create",
    viewPage: "/doctor/shift-management",
    editPage: "/doctor/shift/edit",
    workStatus: "In Progress",
    reference: "Scheduling System"
  },
  {
    id: 6,
    moduleName: "Staff",
    submodule: "Staff Management",
    tableView: "Staff List",
    createPage: "/staff/create",
    viewPage: "/staff/list",
    editPage: "/staff/edit",
    workStatus: "Completed",
    reference: "HR System"
  },
  {
    id: 7,
    moduleName: "Patients",
    submodule: "All Patients",
    tableView: "Patient List",
    createPage: "/patients/create",
    viewPage: "/patients/allpatients",
    editPage: "/patients/edit",
    workStatus: "Completed",
    reference: "Patient Management"
  },
  {
    id: 8,
    moduleName: "Patients",
    submodule: "Patients Records",
    tableView: "Medical Records",
    createPage: "/patients/records/create",
    viewPage: "/patients/patientsrecords",
    editPage: "/patients/records/edit",
    workStatus: "In Progress",
    reference: "EMR System"
  },
  {
    id: 9,
    moduleName: "Appointment",
    submodule: "Appointment Management",
    tableView: "Appointment Schedule",
    createPage: "/appointment/create",
    viewPage: "/appointment/list",
    editPage: "/appointment/edit",
    workStatus: "Completed",
    reference: "Calendar System"
  },
  {
    id: 10,
    moduleName: "Laboratory",
    submodule: "All Lab",
    tableView: "Lab Tests List",
    createPage: "/laboratory/create",
    viewPage: "/laboratory/alllab",
    editPage: "/laboratory/edit",
    workStatus: "Completed",
    reference: "Lab Management"
  },
  {
    id: 11,
    moduleName: "Laboratory",
    submodule: "Lab Test",
    tableView: "Test Results",
    createPage: "/laboratory/test/create",
    viewPage: "/laboratory/labtest",
    editPage: "/laboratory/test/edit",
    workStatus: "In Progress",
    reference: "Lab Information System"
  },
  {
    id: 12,
    moduleName: "Finance",
    submodule: "Income",
    tableView: "Income Records",
    createPage: "/finance/income/create",
    viewPage: "/finance/income",
    editPage: "/finance/income/edit",
    workStatus: "Completed",
    reference: "Accounting Software"
  },
  {
    id: 13,
    moduleName: "Finance",
    submodule: "Expense",
    tableView: "Expense Records",
    createPage: "/finance/expense/create",
    viewPage: "/finance/expense",
    editPage: "/finance/expense/edit",
    workStatus: "In Progress",
    reference: "Expense Management"
  }
];

export default modulesData;

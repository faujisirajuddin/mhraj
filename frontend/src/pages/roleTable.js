import { useNavigate } from "react-router-dom";
import { FaPlus, FaFilter } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
import { DataGrid } from '@mui/x-data-grid';
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
import Box from "@mui/material/Box";
import   InputLabel  from "@mui/material/InputLabel";
import IconButton  from "@mui/material/IconButton";
import   MenuItem  from "@mui/material/MenuItem";
import   Select  from "@mui/material/Select";
import   Pagination  from "@mui/material/Pagination";
import "./table.css";
import CustomButton from "../components/customButton/index";
import { moduleEnumNames, STATIC_VALUES } from "../constant/common";
// import Filter from "./filter/index";
import CustomSwitch from "../components/customSwitch/index";
// import { getRoleAPI, updateStatusAPI } from "../../config/api/role";
import { toast } from "react-toastify";
import debounce from "lodash/debounce";
// import { usePermission } from "../../hooks/usePermissions";

const dummyData = [
  {
    id: 1,
    roleName: "Administrator",
    description: "Full access to the system",
    createdDate: "2023-01-15",
    updatedDate: "2024-04-10",
    status: true,
  },
  {
    id: 2,
    roleName: "Editor",
    description: "Can edit content",
    createdDate: "2023-03-01",
    updatedDate: "2024-03-20",
    status: true,
  },
  {
    id: 3,
    roleName: "Viewer",
    description: "Read-only access",
    createdDate: "2023-05-12",
    updatedDate: "2024-02-01",
    status: false,
  },
  {
    id: 4,
    roleName: "HR Manager",
    description: "Handles employee-related data",
    createdDate: "2022-11-30",
    updatedDate: "2024-01-10",
    status: true,
  },
  {
    id: 5,
    roleName: "Support Agent",
    description: "Manages support tickets",
    createdDate: "2023-06-22",
    updatedDate: "2024-05-15",
    status: false,
  },
    {
    id: 6,
    roleName: "Administrator",
    description: "Full access to the system",
    createdDate: "2023-01-15",
    updatedDate: "2024-04-10",
    status: true,
  },
  {
    id: 7,
    roleName: "Editor",
    description: "Can edit content",
    createdDate: "2023-03-01",
    updatedDate: "2024-03-20",
    status: true,
  },
  {
    id: 8,
    roleName: "Viewer",
    description: "Read-only access",
    createdDate: "2023-05-12",
    updatedDate: "2024-02-01",
    status: false,
  },
  {
    id: 9,
    roleName: "HR Manager",
    description: "Handles employee-related data",
    createdDate: "2022-11-30",
    updatedDate: "2024-01-10",
    status: true,
  },
  {
    id: 10,
    roleName: "Support Agent",
    description: "Manages support tickets",
    createdDate: "2023-06-22",
    updatedDate: "2024-05-15",
    status: false,
  },
  //   {
  //   id: 11,
  //   roleName: "Administrator",
  //   description: "Full access to the system",
  //   createdDate: "2023-01-15",
  //   updatedDate: "2024-04-10",
  //   status: true,
  // },
  // {
  //   id: 12,
  //   roleName: "Editor",
  //   description: "Can edit content",
  //   createdDate: "2023-03-01",
  //   updatedDate: "2024-03-20",
  //   status: true,
  // },
  // {
  //   id: 13,
  //   roleName: "Viewer",
  //   description: "Read-only access",
  //   createdDate: "2023-05-12",
  //   updatedDate: "2024-02-01",
  //   status: false,
  // },
  // {
  //   id: 14,
  //   roleName: "HR Manager",
  //   description: "Handles employee-related data",
  //   createdDate: "2022-11-30",
  //   updatedDate: "2024-01-10",
  //   status: true,
  // },
  // {
  //   id: 15,
  //   roleName: "Support Agent",
  //   description: "Manages support tickets",
  //   createdDate: "2023-06-22",
  //   updatedDate: "2024-05-15",
  //   status: false,
  // },
];
import "./table.css";

const RoleTable = () => {
  const navigate = useNavigate();
  // const { hasAdd, hasEdit, hasView, hasDelete } = usePermission(
  //   moduleEnumNames?.role_management
  // );
  const { COMMON, ROLE_MANAGEMENT } = STATIC_VALUES;
  const [allRoles, setAllRoles] = useState(dummyData);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchValue, setSearchValue] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(
    "Status"
  );

  const [selectedOptions, setSelectedOptions] = useState({});

  const columns = [
    {
      field: "id",
      headerName: "Role ID",
      minWidth: 150,
      sortable: true,
      headerClassName: "bold-header",
    },
    {
      field: "roleName",
      headerName: "Role Name",
      minWidth: 220,
      flex: 1,
      sortable: true,
      headerClassName: "bold-header",
    },
    {
      field: "description",
      headerName: "Description",
      minWidth: 220,
      sortable: true,
      headerClassName: "bold-header",
    },
    {
      field: "createdDate",
      headerName: "Created Date",
      minWidth: 160,
      sortable: true,
      headerClassName: "bold-header",
    },
    {
      field: "updatedDate",
      headerName: "Updated Date",
      minWidth: 160,
      sortable: true,
      headerClassName: "bold-header",
    },
    {
      field: "status",
      headerName: "Status",
      minWidth: 165,
      sortable: false,
      renderCell: (params) => (
        <CustomSwitch
          checked={params?.row?.status}
          onChange={() => handleEnableDisable(params?.row)}
          requiresConfirmation={true}
          name={params?.row?.roleName}
          // disabled={!hasDelete}
        />
      ),
      headerClassName: "bold-header",
    },
    {
      field: "actions",
      headerName: "Action",
      width: 150,
      sortable: false,
      filterable: false,
      disableColumnMenu: true,
      headerClassName: "sticky-column",
      cellClassName: "sticky-column",
      renderCell: (params) => (
        <Box>
          {/* {hasEdit ? ( */}
            <IconButton
              color="primary"
              onClick={() => handleEdit(params?.row?.id)}
            >
              <EditIcon />
            </IconButton>
           {/* ) : null} */}
          {/* {hasView ? ( */}
            <IconButton onClick={() => handleView(params?.row?.id)}>
              <VisibilityIcon />
            </IconButton>
          {/* ) : null} */}
        </Box>
      ),
    },
  ];

  const handleEnableDisable = (record) => {
    // updateStatusAPI(Number(record?.id), {
    //   is_active: !record?.status,
    // }).then((res) => {
    //   if (res?.statusCode === COMMON.STATUS_CODES.SUCCESS) {
    //     toast.success(COMMON.ALERTS.SUCCESSFULLY_UPDATED);
    //     fetchAllRoles(searchValue, page, pageSize);
    //   } else {
    //     toast.error(res?.message);
    //   }
    // });
  };

  const fetchAllRoles = (
    search,
    pageNumber,
    limit,
    filters = {}
  ) => {
    // setLoading(true);

    // const statusFilter = selectedOptions?.Status || [];
    // const isActive =
    //   statusFilter?.length === 1
    //     ? statusFilter[0] === "Active"
    //       ? true
    //       : false
    //     : undefined;

    // const params = {
    //   search,
    //   page: pageNumber,
    //   limit,
    //   ...(isActive !== undefined && { is_active: isActive }),
    //   ...filters,
    // };

    // getRoleAPI({ params })
    //   .then((res) => {
    //     if (res?.statusCode === COMMON.STATUS_CODES.SUCCESS) {
    //       const transformed = (res?.data?.data || [])?.map((role) => ({
    //         id: role?.id,
    //         roleName: role?.name ? role?.name : "-",
    //         description: role?.description ? role?.description : "-",
    //         createdDate: new Date(role?.created_at)?.toLocaleDateString()
    //           ? new Date(role?.created_at)?.toLocaleDateString()
    //           : "-",
    //         updatedDate: new Date(role?.updated_at)?.toLocaleDateString()
    //           ? new Date(role?.updated_at)?.toLocaleDateString()
    //           : "-",
    //         status: role?.is_active,
    //       }));
    //       setAllRoles(transformed);
    //       setTotalCount(res?.data?.meta?.total || 0);
    //     } else {
    //       setAllRoles([]);
    //       setTotalCount(0);
    //     }
    //   })
    //   .catch(() => toast.error("Failed to fetch data"))
    //   .finally(() => setLoading(false));
  };

  const handleSearchChange = (e) => {
    const value = e?.target?.value;
    setSearchValue(value);
    setPage(1);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  const handlePageSizeChange = (event) => {
    const newSize = event?.target?.value;
    setPageSize(newSize);
    setPage(1);
  };

  const debouncedFetch = useCallback(
    debounce((val, page, size, filters) => {
      fetchAllRoles(val, page, size, filters);
    }, 500),
    []
  );

  useEffect(() => {
    debouncedFetch(searchValue, page, pageSize, selectedOptions);
  }, [searchValue, page, pageSize, selectedOptions]);

  const handleResetFilter = () => {
    setSelectedOptions({});
    fetchAllRoles(searchValue, 1, pageSize);
  };

  const handleAdd = () => {
    const path = `admin/}dashboards/add-role`;
    navigate(path);
  };

  const handleEdit = (id) => {
    const path = `admin/dashboards/edit-role?id=${id}`;
    navigate(path);
  };

  const handleView = (id) => {
    const path = `admin/dashboards/view-role?id=${id}`;
    navigate(path);
  };

  return (
    <>
      <div className="grid grid-cols-12 gap-x-6">
        <div className="xl:col-span-12 col-span-12">
          <div className="box" style={{border:"1px solid red",borderRadius:"5px" ,backgroundColor:"#ffffff"}}>
            <div className="box-header flex justify-between px-2.5 py-2.5" >
              <div className="box-title">
                {ROLE_MANAGEMENT.ROLE_MANAGEMENT_TITLE}
              </div>
              <div className="flex flex-wrap gap-2 top-right-part-main">
                
                <input
                  className="ti-form-control form-control-sm"
                  type="text"
                  placeholder="Search Here"
                  value={searchValue}
                  onChange={handleSearchChange}
                  aria-label=".form-control-sm example"
                  style={{border:"1px solid #ccc",borderRadius:"5px",paddingLeft:"10px"}}
                />
                {/* {hasAdd ? ( */}
                  <CustomButton
                    backgroundColor={"#EF4444"}
                    className="add-new-btn"
                    onClick={handleAdd}
                  >
                    <FaPlus className="mr-2" />
                    {COMMON.BUTTONS.ADD}
                  </CustomButton>
                {/* ) : null} */}
                <CustomButton
                  backgroundColor={"#EF4444"}
                  className="add-btn"
                  onClick={() => setFilterOpen(true)}
                >
                  <FaFilter />
                  {COMMON.BUTTONS.FILTER}
                </CustomButton>
              </div>
            </div>
            <div className="table-main">
              <DataGrid
                rows={allRoles}
                columns={columns}
                rowCount={totalCount}
                loading={loading}
                paginationMode="server"
                hideFooterPagination
                autoHeight
              />
            </div>
            <Box
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              my={1}
            >
              <div className="row-per-page-top">
                <InputLabel>{ROLE_MANAGEMENT.ROW_PER_PAGE}</InputLabel>
                <Select
                  value={pageSize}
                  onChange={handlePageSizeChange}
                  label="Rows per page"
                  size="small"
                >
                  {[10, 20, 30, 40, 50].map((option) => (
                    <MenuItem key={option} value={option}>
                      {option}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <div className="pagination-part">
                <Pagination
                  count={Math.ceil(totalCount / pageSize)}
                  page={page}
                  onChange={handlePageChange}
                  color="primary"
                  showFirstButton
                  showLastButton
                />
              </div>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};

export default RoleTable;

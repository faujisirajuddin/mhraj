import { useNavigate } from "react-router-dom";
import { FaPlus, FaFilter } from "react-icons/fa";
import { useCallback, useEffect, useState } from "react";
export { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import VisibilityIcon from "@mui/icons-material/Visibility";
export { Box } from "@mui/material/Box";
export {  InputLabel } from "@mui/material/InputLabel";
export {IconButton } from "@mui/material/IconButton";
export {  MenuItem } from "@mui/material/MenuItem";
export {  Select } from "@mui/material/Select";
export {  Pagination } from "@mui/material/Pagination";
import "../user-management/user-management.css";
import CustomButton from "../components/customButton/index";
import { moduleEnumNames, STATIC_VALUES } from "../../constant/common";
// import Filter from "./filter/index";
import CustomSwitch from "../components/customSwitch/index";
// import { getRoleAPI, updateStatusAPI } from "../../config/api/role";
import { toast } from "react-toastify";
import debounce from "lodash/debounce";
// import { usePermission } from "../../hooks/usePermissions";

const RoleManagement = () => {
  const navigate = useNavigate();
  // const { hasAdd, hasEdit, hasView, hasDelete } = usePermission(
  //   moduleEnumNames?.role_management
  // );
  const { COMMON, ROLE_MANAGEMENT } = STATIC_VALUES;
  const [allRoles, setAllRoles] = useState([]);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchValue, setSearchValue] = useState("");
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<"Status" | null>(
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
          <div className="box mt-10">
            <div className="box-header justify-between">
              <div className="box-title">
                {ROLE_MANAGEMENT.ROLE_MANAGEMENT_TITLE}
              </div>
              <div className="flex flex-wrap gap-2 top-right-part-main">
                {/* {hasAdd ? ( */}
                  <CustomButton
                    backgroundColor={"#EF4444"}
                    className="add-new-btn"
                    onClick={handleAdd}
                  >
                    <FaPlus className="mr-2" />
                    {COMMON.BUTTONS.ADD_NEW_ROLE}
                  </CustomButton>
                {/* ) : null} */}
                <input
                  className="ti-form-control form-control-sm"
                  type="text"
                  placeholder="Search Here"
                  value={searchValue}
                  onChange={handleSearchChange}
                  aria-label=".form-control-sm example"
                />
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
            {/* <Filter
              open={filterOpen}
              setOpen={setFilterOpen}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              selectedOptions={selectedOptions}
              setSelectedOptions={setSelectedOptions}
              handleApplyFilter={() => fetchAllRoles(searchValue, 1, pageSize)}
              handleResetFilter={handleResetFilter}
            /> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default RoleManagement;

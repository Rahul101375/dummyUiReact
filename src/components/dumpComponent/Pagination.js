import * as React from 'react';
import * as MaterialModule from '../../common/Material'
export default function PaginationComponent(props) {
    const { total, limit ,sendDataToParent} = props;
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(30);

    const handleChangePage = (event, newPage) => {
        console.log("page",newPage)
        parentMethodCall(rowsPerPage,newPage);
        setPage(newPage);
       
        
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        console.log("page",parseInt(event.target.value, 10))
        parentMethodCall(parseInt(event.target.value, 10),0);
        setPage(0);
        
    };
  function parentMethodCall(rowsPerPage,skip){
    let payload = {rowsPerPage,skip}
        sendDataToParent(payload)
  }
    return (
        <MaterialModule.TablePagination
            component="div"
            count={total}
            page={page}
            onPageChange={handleChangePage}
            rowsPerPage={rowsPerPage}
            onRowsPerPageChange={handleChangeRowsPerPage}
        />
    );
}
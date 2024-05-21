import * as React from 'react'
import * as MaterialModule from '../../common/Material'
import { getAllInfo } from '../../service'
import CardComponent from '../dumpComponent/Card'
import PaginationComponent from '../dumpComponent/Pagination';
import SearchComponent from '../dumpComponent/Search';
import * as _ from 'lodash'
function ProductsComponent() {
    const [product, setProduct] = React.useState([]);
    const [endPointWithLimit, setEndPointWithLimit] = React.useState();
    const [search, setSearch] = React.useState();

    React.useEffect(() => {
        let extraKey = `products?limit=${endPointWithLimit?.rowsPerPage || 30}&skip=${endPointWithLimit?.skip || 0}`
        let searchQuery = `products/search?q=${search}`;
        let finalUrl = search?.length ? searchQuery : extraKey
        getAllInfo(finalUrl).then((res) => {
            if (res && res.data && res.data.products) {
                setProduct(res.data);
            } else {
                console.log('Unexpected response structure:', res);
            }
        })
    }, [endPointWithLimit,search]);
    function handleDataFromChild(data) {
        console.log("payload data", data)
        setEndPointWithLimit(data);
    }
    function handleSearchFromChild(data) {
        console.log("payload search", data)
        setSearch(data);
    }
    return (
        <>
            <MaterialModule.Box component="main" sx={{ p: 3 }}>
                <MaterialModule.Toolbar />
                <MaterialModule.Typography>
                    <MaterialModule.Grid container spacing={2} style={{ margin: "10px 0px", padding: "0px" }}>
                        <MaterialModule.Grid item xs={6}>
                            <PaginationComponent total={product.total} skip={product.skip} limit={product.limit} sendDataToParent={handleDataFromChild} />
                        </MaterialModule.Grid>
                        <MaterialModule.Grid item xs={6}>
                            <SearchComponent SearchDataSendToParent={handleSearchFromChild} />
                        </MaterialModule.Grid>
                    </MaterialModule.Grid>
                    <MaterialModule.Grid container spacing={2} alignItems="stretch">
                        {
                            product.products?.length && (
                                _.map(product.products, (item, key) => (
                                    <MaterialModule.Grid item xs={3} key={key} style={{ display: 'flex' }}>
                                        <CardComponent cardItem={item} />
                                    </MaterialModule.Grid>
                                ))
                            )
                        }
                    </MaterialModule.Grid>
                </MaterialModule.Typography>
            </MaterialModule.Box>

        </>
    )
}
export default ProductsComponent
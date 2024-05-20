import * as React from 'react'
import * as MaterialModule from '../../common/Material'
import { getAllInfo } from '../../service'
import CardComponent from '../dumpComponent/Card'
function ProductsComponent() {
    const [product,setProduct] = React.useState([])
    React.useEffect(() => {
        getAllInfo('products').then((res) => {
            // setProduct(res.products)
            if (res && res.data && res.data.products) {
                setProduct(res.data.products);
            } else {
                console.log('Unexpected response structure:', res);
            }
        })
    },[])
    return (
        <>
            <MaterialModule.Box component="main" sx={{ p: 3 }}>
                <MaterialModule.Toolbar />
                <MaterialModule.Typography>
                    <MaterialModule.Grid container spacing={2}>
                        {
                           product?.length && (
                            product.map((item, key) => (
                                    <MaterialModule.Grid item xs={3} key={key}>
                                        <CardComponent cardItem={item}/>
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
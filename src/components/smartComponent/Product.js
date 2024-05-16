import * as React from 'react'
import * as MaterialModule from '../../common/Material'
import { getAllInfo} from '../../service'
function ProductsComponent() {
    React.useEffect(()=>{
        getAllInfo('productsss').then((res)=>{
            console.log("res",res)
        })
    },[])
    return (
        <>
            <MaterialModule.Box component="main" sx={{ p: 3 }}>
                <MaterialModule.Toolbar />
                <MaterialModule.Typography>
                    Product Component
                </MaterialModule.Typography>
            </MaterialModule.Box>

        </>
    )
}
export default ProductsComponent
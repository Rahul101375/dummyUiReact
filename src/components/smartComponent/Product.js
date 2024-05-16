import * as React from 'react'
import * as MaterialModule from '../../common/Material'
function ProductsComponent() {
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
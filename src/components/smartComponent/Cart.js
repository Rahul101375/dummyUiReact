import * as React from 'react'
import * as MaterialModule from '../../common/Material'

function CartComponent() {
    return (
        <>
            <MaterialModule.Box component="main" sx={{ p: 3 }}>
                <MaterialModule.Toolbar />
                <MaterialModule.Typography>
                    Cart Component
                </MaterialModule.Typography>
            </MaterialModule.Box>

        </>
    )
}
export default CartComponent
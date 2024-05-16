import * as React from 'react'
import * as MaterialModule from '../../common/Material'

function ImageComponent() {
    return (
        <>
            <MaterialModule.Box component="main" sx={{ p: 3 }}>
                <MaterialModule.Toolbar />
                <MaterialModule.Typography>
                    Image Component
                </MaterialModule.Typography>
            </MaterialModule.Box>
        </>
    )
}
export default ImageComponent
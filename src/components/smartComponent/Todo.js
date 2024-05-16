import * as React from 'react'
import * as MaterialModule from '../../common/Material'

function TodoComponent() {
    return (
        <>
            <MaterialModule.Box component="main" sx={{ p: 3 }}>
                <MaterialModule.Toolbar />
                <MaterialModule.Typography>
                    Todo Component
                </MaterialModule.Typography>
            </MaterialModule.Box>

        </>
    )
}
export default TodoComponent
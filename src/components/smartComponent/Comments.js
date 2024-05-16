import * as React from 'react'
import * as MaterialModule from '../../common/Material'
function CommentComponent() {
    return (
        <>
            <MaterialModule.Box component="main" sx={{ p: 3 }}>
                <MaterialModule.Toolbar />
                <MaterialModule.Typography>
                    Comment Component
                </MaterialModule.Typography>
            </MaterialModule.Box>
        </>
    )
}
export default CommentComponent
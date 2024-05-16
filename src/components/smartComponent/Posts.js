import * as React from 'react'
import * as MaterialModule from '../../common/Material'
function PostsComponent() {
    return (
        <>
            <MaterialModule.Box component="main" sx={{ p: 3 }}>
                <MaterialModule.Toolbar />
                <MaterialModule.Typography>
                    Posts Component
                </MaterialModule.Typography>
            </MaterialModule.Box>

        </>
    )
}
export default PostsComponent